const webpack = require('webpack');
const path = require('path');
require('shebang-loader'); // Ignore CLI (Command line interface) / hashbang Eg:  #! /usr/bin/env node
require('json-loader');

/* Webpack Structure
    Entry
    Output
    Loaders: Modules Enable webpack to process more than just JavaScript files
    Plugins: Plugings Range from bundle optimization and minification all the way to defining environment-like variables.
 */
console.log(__dirname);
const fileMap = {};
module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: '/.js$/',
                use: ['shebang-loader'],
            },
            { test: /\.json$/, loader: ['json-loader'] },
        ],
    },
    resolve: {
        /*extensions: ['.webpack.js', '.web.js', '.js']*/
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
};
