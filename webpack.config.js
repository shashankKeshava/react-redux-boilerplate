const webpack = require('webpack');
const path = require('path');

/* Webpack Structure
    Entry
    Output
    Loaders: Modules Enable webpack to process more than just JavaScript files
    Plugins: Plugings Range from bundle optimization and minification all the way to defining environment-like variables.
*/
module.exports = {
    // First file in your dependency graph(first file in app)
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }],
    },
    //loaders
    modules: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
            }
        ],
    },
};
