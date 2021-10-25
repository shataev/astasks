const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    watch: true,
    entry: './src/js/index.js',
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/, loader: "underscore-template-loader" }
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
    },
    plugins: [
        //will automatically inject bundle js into ./dist/index.html
        new HTMLWebpackPlugin({
            template: './src/index.html', //source
            filename: 'index.html'  //destination
        })
    ]
}