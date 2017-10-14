var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve('dist/public'),
    publicPath: 'dist/public',
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map'
  },
  devServer: {
    contentBase: './'
  },
  module: {
    rules: [
      {
        //Bable and react loader
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        // CSS compilers
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'bundle.js.map'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      Tether: 'tether'
    })
  ]
};
