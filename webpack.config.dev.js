const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack');
const path = require('path');

/* Webpack Structure
    Entry
    Output
    Loaders: Modules Enable webpack to process more than just JavaScript files
    Plugins: Plugings Range from bundle optimization and minification all the way to defining environment-like variables.
 */
console.log(path.resolve(__dirname, './public'));
const fileMap = {};

module.exports = {
    entry: {
        app: path.resolve(__dirname,'./src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, '/public'),
        filename: 'build.js',
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
};
