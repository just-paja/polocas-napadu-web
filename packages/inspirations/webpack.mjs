/* istanbul ignore file */
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import WebpackDevServer from 'webpack-dev-server'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import babelConfig from '../../babel.config.js'

import { compile } from '../../webpack.mjs'
import { resolve } from 'path'
import { URL } from 'url'

const UI_PORT_DEFAULT = 3000
const SCRIPT_DIRNAME = new URL('.', import.meta.url).pathname

console.log(SCRIPT_DIRNAME)

// Relative path from the project root to the browser entry file
const ENTRY_PATH = 'index.mjs'

const getSassLoader = nodeEnv => ({
  test: /s[ac]ss$/,
  use: [
    nodeEnv === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
    'css-loader',
    'resolve-url-loader',
    { loader: 'sass-loader', options: { sourceMap: true } },
  ],
})

const assetLoader = {
  test: /\.(webp|jpg|jpeg|otf|png|svg)$/,
  type: 'asset/resource',
}

export const getWebpackConfig = ({ distDir, entryPath, env }) => ({
  entry: entryPath,
  mode: (env.NODE_ENV === 'production' && env.NODE_ENV) || 'development',
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          ...babelConfig,
          plugins: [
            env.NODE_ENV !== 'production' && 'react-refresh/babel',
            '@babel/plugin-proposal-export-default-from',
          ].filter(Boolean),
        },
      },
      getSassLoader(env.NODE_ENV),
      assetLoader,
    ],
  },
  output: {
    path: distDir,
    publicPath: '/',
    filename: 'main-[chunkhash].js',
  },
  plugins: [
    env.NODE_ENV !== 'production' && new ReactRefreshWebpackPlugin(),
    new webpack.EnvironmentPlugin(env),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(SCRIPT_DIRNAME, 'public', 'index.html'),
    }),
  ].filter(Boolean),
  target: 'web',
})

export const getWebpackEnvironment = envOverride => {
  const distDir = resolve(SCRIPT_DIRNAME, 'dist')
  const entryPath = resolve(SCRIPT_DIRNAME, 'src', ENTRY_PATH)
  return {
    distDir,
    env: {
      apiUrl: process.env.API_URL || 'http://localhost:8000/graphql',
      NODE_ENV: process.env.NODE_ENV || 'development',
      ...envOverride,
    },
    entryPath,
  }
}

const createDevServer = () => {
  const defaultConfig = getWebpackConfig(getWebpackEnvironment())
  const compilerConfig = {
    ...defaultConfig,
  }
  const compiler = webpack(compilerConfig)
  const devServerOptions = {
    open: true,
    port: process.env.IG11_UI_PORT || UI_PORT_DEFAULT,
    historyApiFallback: true,
    hot: true,
  }
  return new WebpackDevServer(devServerOptions, compiler)
}

export const runDevServer = () => createDevServer().start()

export const transpileScript = config =>
  compile(webpack(getWebpackConfig(config)))

export const build = async () =>
  await transpileScript(
    getWebpackEnvironment({ NODE_ENV: process.env.NODE_ENV || 'production' })
  )
