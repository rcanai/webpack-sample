const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DevPath = path.join(__dirname, 'dev-assets');
const OutputPath = path.join(__dirname, 'assets');

const Entrys = {
  'application': './application',
  'pages/home': './pages/home'
};

ScriptConfig = {
  context: path.join(DevPath, 'scripts'),
  entry: Entrys,
  output: {
    path: path.join(OutputPath, 'js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
        options: {
          failOnError: true
        }
      }
    ]
  },
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'webpackCommonChunk'
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  watchOptions: {
    poll: 300 /* Vagrant error avoidance */
  }
};

StyleConfig = {
  context: path.join(DevPath, 'styles'),
  entry: Entrys,
  output: {
    path: path.join(OutputPath, 'css'),
    filename: '[name].css'
  },
  resolve: {
    extensions: ['.scss']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader:
        ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader",
            options: {
              minimize: true /* minify */
            }
          }, {
            loader: "sass-loader"
          }],
        }),
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  watchOptions: {
    poll: 300 /* Vagrant error avoidance */
  }
};

module.exports = [
  ScriptConfig,
  StyleConfig
];
