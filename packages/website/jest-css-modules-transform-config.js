const { join, resolve } = require('path')

module.exports = {
  sassConfig: {
    includePaths: [
      join(__dirname, 'lib', 'styles'),
      resolve(__dirname, '..', '..', 'node_modules'),
    ],
  },
}
