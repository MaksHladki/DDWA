const webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        library: 'webpack'
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: './node_modules/',
        poll: 1000
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                unsafe: false,
                drop_console: true
            },
            comments: false,
            beautify: true
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        }]
    }
}