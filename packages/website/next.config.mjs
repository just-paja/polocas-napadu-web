import i18nConfig from './next-i18next.config.js'
import transpileModules from 'next-transpile-modules'

import { join, resolve } from 'path'
import { defaultLang, getRewrites } from './routes.mjs'
import { URL } from 'url'

const baseDir = new URL('.', import.meta.url).pathname
const oneYear = 31536000
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  {
    key: 'Strict-Transport-Security',
    value: `max-age=${oneYear}; includeSubdomains; preload`,
  },
]

const withModules = transpileModules(['@polocas-napadu/ui'])

export default withModules({
  publicRuntimeConfig: {
    API_URL: process.env.NODE_API_URL || 'http://localhost:8000/graphql',
    GA_CODE: process.env.NODE_GA_CODE || null,
    defaultLang,
  },
  i18n: i18nConfig.i18n,
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [
      join(baseDir, 'lib', 'styles'),
      resolve(baseDir, '..', '..'),
    ],
  },
  headers: () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
  rewrites: getRewrites,
  webpack: config => {
    config.module.rules.unshift({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    })
    return config
  },
})
