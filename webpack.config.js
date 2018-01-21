const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // Merges multiple webpack configs similar to Object.assign({})

const commonConfig = require('./build-utils/webpack.common')
/* Webpack Structure
    Entry
    Output
    Loaders: Modules Enable webpack to process more than just JavaScript files
    Plugins: Plugings Range from bundle optimization and minification all the way to defining environment-like variables.
*/
module.exports = env => {
    console.log(env);
    const envConfig = require(`./build-utils/webpack.${env}.js`)

    return webpackMerge(commonConfig, envConfig);
};
