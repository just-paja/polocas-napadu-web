/* istanbul ignore file */

import { setupReactWebpack } from '../../webpack.mjs'
import { resolve } from 'path'
import { URL } from 'url'

const baseDir = new URL('.', import.meta.url).pathname

export const { build, runDevServer } = setupReactWebpack({
  defaultPort: 3003,
  distDir: resolve(baseDir, 'dist'),
  entryPath: resolve(baseDir, 'src', 'index.mjs'),
  template: resolve(baseDir, 'public', 'index.html'),
})
