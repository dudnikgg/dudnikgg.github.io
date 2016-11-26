const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].bundle.js',
    library: '[name]'
  },

  devServer: {
    contentBase: __dirname + '\\app',
    inline: true,
    colors: true,
    open: true,
    port: '9999'
  },
  module: {
    loaders: [
      {
        test: /\.js$/, 
        loader: 'babel?presets[]=es2015', 
        exclude: /node_modules/
      },
      {
        test: /\.pug$/, 
        loader: 'pug'
      },
      {
        test: /\.(scss|sass)$/, 
        loaders: ['style', 'css', 'autoprefixer?browsers=last 10 versions', 'resolve-url', 'sass?sourceMap', 'sass-resources']
      },
      // FONTS
      {
        test: /\.woff$/,
        loader: 'url?limit=100000&name=./fonts/[name]/[hash].[ext]'
      }, {
        test: /\.eot$/,
        loader: 'file?name=./fonts/[name]/[hash].[ext]'
      }, 
      {
        test: /\.svg$/,
        loader: 'url?limit=100000&name=./fonts/[name]/[hash].[ext]'
      },
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&name=./fonts/[name]/[hash].[ext]&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file?name=./fonts/[name]/[hash].[ext]'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file'
      },
    ]
  },
  sassResources: path.resolve(__dirname, './app/assets/sass/variables.sass'),
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 3
    }),
    new HtmlWebpackPlugin({
      template: './app.pug',
      inject: 'body',
    })
  ]
};
