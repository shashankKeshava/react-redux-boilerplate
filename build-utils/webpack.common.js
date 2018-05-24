'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');

const commonPaths = require('./common-paths');

module.exports = {
    // Entry: First file webpack starts(your dependency graph)
    entry: {
        app: commonPaths.inputPath,
    },
    // Output: How and where to put bundles and format them
    output: {
        filename: 'bundle.js',
        path: commonPaths.outputPath,
        publicPath: '/',
    },
    // Loaders:  How to treat files before adding to dependency graphs
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                include: [commonPaths.srcPath],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['es2015', {
                                modules: false
                            }], 'react', 'airbnb'
                        ],
                        plugins: ['transform-runtime'],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                    },
                }, ],
            }, {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: [commonPaths.srcPath],
            }
        ],
    },
    // Plugins: Extremely Customizable
    plugins: [
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
            // HTML Title
            title:'React Redux BoilerPlate',
            template:`${commonPaths.outputPath}/index.html`
        })
    ],
};