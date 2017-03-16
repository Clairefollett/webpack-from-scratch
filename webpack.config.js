const HtmlWebpackPlugin = require ('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: 'images'
        }])
    ],
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ['es2015', {modules: false}],
                        'react',
                    ],
                }
            }
            ]
            }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    }
};