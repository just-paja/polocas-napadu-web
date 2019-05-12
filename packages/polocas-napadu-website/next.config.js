const withSass = require('@zeit/next-sass')

module.exports = withSass({
  publicRuntimeConfig: {
    API_URL: process.env.NODE_API_URL || 'http://localhost:8000/graphql'
  },
  sassLoaderOptions: {
    includePaths: ['lib/styles']
  },
  cssModules: 'global'
})
