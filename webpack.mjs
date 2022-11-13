/* istanbul ignore file */

import babelConfig from './babel.config.js'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'

const getMode = env =>
  (env.NODE_ENV === 'production' && env.NODE_ENV) || 'development'

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

export const getAssetLoader = () => ({
  test: /\.(webp|jpg|jpeg|otf|png|svg|wav|mp3)$/,
  type: 'asset/resource',
})

export const getSassLoader = nodeEnv => ({
  test: /s[ac]ss$/,
  use: [
    nodeEnv === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'resolve-url-loader',
    { loader: 'sass-loader', options: { sourceMap: true } },
  ],
})

export const getReactRules = nodeEnv => [
  {
    test: /\.mjs$/,
    resolve: {
      fullySpecified: false,
    },
  },
  {
    test: /\.m?jsx?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      ...babelConfig,
      plugins: [
        nodeEnv !== 'production' && 'react-refresh/babel',
        '@babel/plugin-proposal-export-default-from',
      ].filter(Boolean),
    },
  },
  getSassLoader(nodeEnv),
  getAssetLoader(nodeEnv),
]

export const getReactPlugins = ({ env, template }) =>
  [
    env.NODE_ENV !== 'production' && new ReactRefreshWebpackPlugin(),
    new webpack.EnvironmentPlugin(env),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template,
    }),
  ].filter(Boolean)

export const getReactConfig = ({ env, template }) => ({
  plugins: getReactPlugins({ env, template }),
  rules: getReactRules(env.NODE_ENV),
})

export const getConfig = ({ distDir, entryPath, env, template }) => {
  const { plugins, rules } = getReactConfig({
    env,
    template,
  })
  return {
    entry: entryPath,
    mode: getMode(env),
    module: {
      rules,
    },
    output: {
      path: distDir,
      publicPath: '/',
      filename: 'main-[chunkhash].js',
    },
    plugins,
    target: 'web',
  }
}

const getDefaultEnv = () => ({
  apiUrl: process.env.API_URL || 'http://localhost:8000/graphql',
  NODE_ENV: process.env.NODE_ENV || 'development',
})

export const setupReactWebpack = ({ defaultPort, env, ...webpackProps }) => {
  const getWebpackConfig = props =>
    getConfig({
      ...webpackProps,
      ...props,
      env: {
        ...getDefaultEnv(),
        ...env,
        ...props?.env,
      },
    })

  const createDevServer = props => {
    const compiler = webpack(getWebpackConfig(props))
    const devServerOptions = {
      open: true,
      port: process.env.PORT || defaultPort,
      historyApiFallback: true,
      hot: true,
    }
    return new WebpackDevServer(devServerOptions, compiler)
  }
  const runDevServer = () => createDevServer().start()
  const transpileScript = props => compile(webpack(getWebpackConfig(props)))
  const build = () =>
    transpileScript({
      env: { NODE_ENV: process.env.NODE_ENV || 'production' },
    })

  return { build, createDevServer, runDevServer, transpileScript }
}
