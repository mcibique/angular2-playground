const webpack = require('webpack');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader'],
        exclude: [/\.spec\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
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
  }
}