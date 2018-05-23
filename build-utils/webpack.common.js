'use strict';

const webpack = require('webpack');
const htmlWebpack = require('html-webpack-plugin');

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
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [commonPaths.srcPath],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', { modules: false }], 'react'],
                        plugins: ['transform-runtime'],
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                        },
                    },
                ],
            },
        ],
    },
    // Plugins: Extremely Customisable
    plugins: [
        new webpack.ProgressPlugin(),
        new htmlWebpack({
            template: `${commonPaths.outputPath}/index.html`,
        }),
    ],
};
