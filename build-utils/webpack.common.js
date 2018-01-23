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
    },
    // Loaders:  How to treat files before adding to dependency graphs
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: ['babel-loader'],
                include: [commonPaths.srcPath],
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime'],
                },
            },
        ],
        rules: [
            {
                test: /\.png$/,
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
    plugins: [new webpack.ProgressPlugin(), new htmlWebpack()],
};
