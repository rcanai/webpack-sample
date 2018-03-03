const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DevPath = path.join(__dirname, 'assets.development');
const OutputPath = path.join(__dirname, 'assets');

const Entrys = {
  'application': './application',
  'pages/home': './pages/home'
};

ScriptConfig = {
  mode: 'development',
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
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  optimization: {
    splitChunks : {
      chunks: 'all',
      name: 'chunks'
    }
  },
  watchOptions: {
    poll: 300 /* Vagrant error avoidance */
  }
};

StyleConfig = {
  mode: 'development',
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
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  watchOptions: {
    poll: 300 /* Vagrant error avoidance */
  }
};

module.exports = [
  ScriptConfig,
  StyleConfig
];
