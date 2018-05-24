const commonPaths = require('./common-paths');

module.exports = {
    devtool: 'source-map',
    devServer: {
        contentBase: commonPaths.outputPath,
        port: 8080,
    },
    module: {
    },
};
