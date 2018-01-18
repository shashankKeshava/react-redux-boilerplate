const webpack = require('webpack');
const path = require('path');

/* Webpack Structure
    Entry
    Output
    Loaders: Modules Enable webpack to process more than just JavaScript files
    Plugins: Plugings Range from bundle optimization and minification all the way to defining environment-like variables.
*/
module.exports = {
    // Entry: First file webpack starts(your dependency graph)
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    // Output: How and where to put bundles and format them
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    // Loaders:  How to treat files before adding to dependency graphs 
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    // Plugins: Extremely Customisable
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ContextReplacementPlugin(),
    ],
};
