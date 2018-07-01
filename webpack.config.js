'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPaths = {
    public: path.resolve(__dirname, 'public/'),
    src: path.resolve(__dirname, './src/'),
};

module.exports = {
    entry: commonPaths.src,
    devServer: {
        contentBase: commonPaths.public,
        port: 8080,
        stats: 'minimal',
    },
    devtool: 'source-map',
    output: {
        path: commonPaths.public,
        filename: 'aboutyou.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties',
                    ],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'About You Coding Test',
            template: commonPaths.src + '/index.html',
            filename: commonPaths.public + '/index.html',
            inject: true,
        }),
    ],
};
