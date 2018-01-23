/* Location of all Paths used */

const path = require('path');

module.exports = {
    srcPath:path.resolve(__dirname, '../src/'),
    inputPath: path.resolve(__dirname, '../src/index.js'),
    outputPath: path.resolve(__dirname, '../public')
}