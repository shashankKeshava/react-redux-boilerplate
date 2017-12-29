const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path'); //Provides utilities for working with file and directory paths

/* Webpack Structure
    Entry
    Output
    Loaders: Enable webpack to process more than just JavaScript files
    Plugins: Plugings Range from bundle optimization and minification all the way to defining environment-like variables.
 */
console.log(__dirname);
const fileMap = {};
module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        // path.resolve() method resolvd a sequence of paths or path segment into absolute path
        path : path.resolve(__dirname, './public'),
        filename: 'webpack.bundle.js',
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
};
