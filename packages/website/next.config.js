const path = require('path')

module.exports = {
  publicRuntimeConfig: {
    API_URL: process.env.NODE_API_URL || 'http://localhost:8000/graphql',
    GA_CODE: process.env.NODE_GA_CODE || null,
    GTM_CODE: process.env.NODE_GTM_CODE || null
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'lib', 'styles'),
      path.resolve(__dirname, '..', '..')
    ]
  }
}
