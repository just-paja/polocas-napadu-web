const i18nextMiddleware = require('i18next-express-middleware')
const pathMatch = require('path-match')
const { lngFromReq, redirectWithoutCache } = require('next-i18next/dist/commonjs/utils')

const route = pathMatch()

function subpathFromLng (config, lng) {
  return `/${lng}`
}

function subpathIsPresent (url, subpath) {
  return url.indexOf(subpath) === 0
}

module.exports = function (nexti18next) {
  const { config, i18n } = nexti18next
  const { allLanguages, ignoreRoutes, localeSubpaths } = config

  const isI18nRoute = (req) => ignoreRoutes.every(x => !req.url.startsWith(x))
  const localeSubpathRoute = route(`/:subpath(${Object.values(localeSubpaths).join('|')})(.*)`)

  const middleware = []

  /*
    If not using server side language detection,
    we need to manually set the language for
    each request
  */
  if (!config.serverLanguageDetection) {
    middleware.push((req, _res, next) => {
      if (isI18nRoute(req)) {
        req.lng = config.defaultLanguage
      }
      next()
    })
  }

  /*
    This does the bulk of the i18next work
  */
  middleware.push(i18nextMiddleware.handle(i18n))

  /*
    This does the locale subpath work
  */
  middleware.push((req, res, next) => {
    if (isI18nRoute(req) && req.i18n) {
      let currentLng = lngFromReq(req)

      const lngFromCurrentSubpath = allLanguages.find((l) =>
        subpathIsPresent(req.url, subpathFromLng(config, l)))

      if (!lngFromCurrentSubpath) {
        return redirectWithoutCache(res, `/${currentLng}`)
      } else {
        /*
          If a user has hit a subpath which does not
          match their language, give preference to
          the path, and change user language.
        */
        req.i18n.changeLanguage(lngFromCurrentSubpath)
        currentLng = lngFromCurrentSubpath
      }

      /*
        If a locale subpath is present in the URL,
        modify req.url in place so that NextJs will
        render the correct route
      */
      if (typeof lngFromCurrentSubpath === 'string') {
        const params = localeSubpathRoute(req.url)
        if (params !== false) {
          const { subpath } = params
          req.query = { ...req.query, subpath, lng: currentLng }
        }
      }
    }

    next()
  })

  return middleware
}
