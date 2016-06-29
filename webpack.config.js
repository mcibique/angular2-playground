const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'cheap-module-source-map',
  entry: {
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: './dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: './src',
    modulesDirectories: ['node_modules'],
  },
  module: {
    preLoaders: [{
      test: /\.ts$/,
      loader: 'tslint'
    }],
    loaders: [{
      test: /\.ts$/,
      loader: 'awesome-typescript-loader',
      exclude: [/\.spec\.ts$/]
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'autoprefixer', 'sass']
    }, {
      test: /\.html$/,
      loader: 'raw-loader'
    }]
  },
  plugins: [
    new DefinePlugin({
      'ENV': '"development"',
      'process.env': {
        'ENV': '"development"',
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'dependency'
    }),
    new SassLintPlugin({
      configFile: './.sass-lint.yml',
      glob: './src/**/*.s?(a|c)ss',
      quiet: false,

    })
  ],
  devServer: {
    port: 8000,
    host: 'localhost',
    quiet: false,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: './dist'
  },
  cssLoader: {
    sourceMap: true
  },
  sassLoader: {
    sourceMap: true,
    includePaths: ['./node_modules/normalize-scss/sass/', './src/styles/']
  },
  autoprefixerLoader: {
    safe: true,
    remove: false,
    browsers: ['last 2 version']
  },
  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: './src',
    formattersDirectory: 'node_modules/custom-tslint-formatters/formatters',
    formatter: 'grouped'
  }
}
