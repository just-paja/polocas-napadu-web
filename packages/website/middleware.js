import { NextResponse } from 'next/server'
import { i18n } from './next-i18next.config.js'
import { Locales } from 'locale'

const supported = new Locales(i18n.locales, i18n.fallbackLocale)

const PUBLIC_FILE = /^\/?$/

const shouldAssignLocale = req =>
  PUBLIC_FILE.test(req.nextUrl.pathname) &&
  !req.nextUrl.pathname.includes('/api/') &&
  req.nextUrl.locale === 'default'

const getBestLocale = req =>
  new Locales(req.headers.get('accept-language')).best(supported)

const getProto = req =>
  req.headers.get('x-forwarded-proto') || req.proto === 'https'
    ? 'https'
    : 'http'

const getHost = req =>
  req.headers.get('x-forwarded-host') ||
  req.headers.get('host') ||
  process.env.FRONTEND_HOST

const getOrigin = req => `${getProto(req)}://${getHost(req)}`

const redirectToLocalizedUrl = req =>
  NextResponse.redirect(
    `${getOrigin(req)}/${getBestLocale(req)}${req.nextUrl.pathname}`
  )

export const middleware = req => {
  if (shouldAssignLocale(req)) {
    return redirectToLocalizedUrl(req)
  }
  return null
}
