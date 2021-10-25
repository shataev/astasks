const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/js/index.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
    },
}