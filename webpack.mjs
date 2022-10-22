/**
 * A shortcut to wait until webpack transiplation finishes
 * @param {WebpackCompiler} compiler
 * @async
 * @returns WebpackStats
 */
export const compile = async compiler =>
  await new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }
      const info = stats.toJson()
      if (stats.hasErrors()) {
        const statsErr = new Error()
        statsErr.message = info.errors[0].message
        statsErr.stack = info.errors[0].stack
        return reject(statsErr)
      }
      compiler.close(closeErr => {
        if (closeErr) {
          reject(closeErr)
        }
      })
      if (!err) {
        resolve(stats)
      }
      return null
    })
  })
