const path = require('path')

module.exports = {
  sassConfig: {
    includePaths: [
      path.join(
        __dirname,
        'packages',
        'polocas-napadu-website',
        'lib',
        'styles'
      )
    ]
  }
}
