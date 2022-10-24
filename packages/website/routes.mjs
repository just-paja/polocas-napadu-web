import { InternalServerError, MissingParam } from './errors.mjs'

const cs = {
  home: {
    source: '/',
    destination: '/home',
  },
  about: {
    source: '/o-nas',
    destination: '/about',
  },
  article: {
    source: '/clanek/:slug',
    destination: '/article/:slug',
  },
  contact: {
    source: '/kontakt',
    destination: '/contact',
  },
  foulTypeDetail: {
    source: '/short-formy/typy-faulu/:slug',
    destination: '/foul-types/:slug',
  },
  foulTypeList: {
    source: '/short-formy/typy-faulu',
    destination: '/foul-types',
  },
  gameDetail: {
    source: '/short-formy/kategorie/:slug',
    destination: '/games/:slug',
  },
  gameList: {
    source: '/short-formy/kategorie',
    destination: '/games',
  },
  members: {
    source: '/o-nas#clenove',
    destination: '/about',
  },
  profile: {
    source: '/clen/:slug',
    destination: '/members/:slug',
  },
  repertoir: {
    source: '/repertoar',
    destination: '/repertoir',
  },
  showDetail: {
    source: '/predstaveni/:slug',
    destination: '/shows/:slug',
  },
  showFormatDetail: {
    source: '/repertoar/:slug',
    destination: '/repertoir/:slug',
  },
  showList: {
    source: '/predstaveni',
    destination: '/showList',
  },
}

const en = {
  home: { source: '/', destination: '/' },
  about: { source: '/about', destination: '/about' },
  article: { source: '/article/:slug', destination: '/article/:slug' },
  contact: { source: '/contact', destination: '/contact' },
  foulTypeDetail: {
    source: '/short-forms/foul-types/:slug',
    destination: '/foul-types/:slug',
  },
  foulTypeList: {
    source: '/short-forms/foul-types',
    destination: '/foul-types',
  },
  gameDetail: {
    source: '/short-forms/games/:slug',
    destination: '/games/:slug',
  },
  gameList: { source: '/short-forms/games', destination: '/games' },
  members: { source: '/o-nas#members', destination: '/o-nas#members' },
  profile: { source: '/member/:slug', destination: '/member/:slug' },
  repertoir: { source: '/repertoir', destination: '/repertoir' },
  showDetail: { source: '/shows/:slug', destination: '/shows/:slug' },
  showFormatDetail: {
    source: '/repertoir/:slug',
    destination: '/repertoir/:slug',
  },
  showList: { source: '/shows', destination: '/showList' },
}

export const defaultLang = 'cs'
const routes = {
  cs,
  en,
}

export const getRewrites = () =>
  Object.values(routes).reduce(
    (aggr, paths) => aggr.concat(Object.values(paths)),
    []
  )

export const translateRoute = (path, params) =>
  path.replace(/(:[a-zA-Z]+)/g, match => {
    const param = match.substring(1)
    const value = params && params[param]
    if (!value) {
      throw new MissingParam(
        `Cannot translate path "${path}" without "${param}"`
      )
    }
    return value
  })

export const reverse = (lang, name, params) => {
  const src = routes[lang || defaultLang]
  const route = src[name]
  if (!route) {
    throw new InternalServerError(`Failed to find route "${lang}:${name}"`)
  }
  return `/${lang}${translateRoute(route.source, params)}`
}
