 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
     entry: './src/index.js',
     output: {
         path: './build',
         filename: 'bundle.js'
     },
     plugins: [
         new HtmlWebpackPlugin({
             template: './src/index.html'
         })
     ],
     module: {
         rules: [{
             enforce: 'pre',
             test: /\.js$/,
             loader: 'eslint-loader',
             exclude: /node_modules/
         }
         ,{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             options: {presets: ['es2015']}
         }
         ]
     }
 };