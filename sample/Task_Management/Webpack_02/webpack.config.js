const webpack = require('webpack'),
    path = require("path");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: ['webpack-dev-server/client',
            'webpack/hot/only-dev-server',
            './index/index'
        ],
        about: ['webpack-dev-server/client',
            'webpack/hot/only-dev-server',
            './about/about'
        ]
    },
    output: {
        path: 'dist/',
        filename: "[name]/[name].js",
        library: '[name]',
        chunkFilename: "[id].chunk.js"
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
                drop_debugger: false,
                unsafe: false,
                drop_console: false
            },
            comments: false,
            beautify: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "[name].js"
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
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1&sourceMap',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?name=[path][name].[ext]?[hash]',
                    'image-webpack?bypassOnDebug&optimizationLevel=5'
                ]
            },
            {
                test: /\.html$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },
    devServer: {
        host: '127.0.0.1',
        port: 5000,
        contentBase: __dirname + '/dist',
        hot: true
    }
}