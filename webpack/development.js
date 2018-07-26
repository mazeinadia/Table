const path = require('path');
const merge = require('webpack-merge');
const base = require('./base');

const REDUX_LOGGING = true;

module.exports = merge(base({REDUX_LOGGING}), {
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*/, to: path.posix.join('/', 'index.html')
                },
            ],
        },
        contentBase: false,
        compress: true,
        host: '0.0.0.0',
        port: 8080,
        overlay: {
            warnings: false,
            errors: true
        },
        publicPath: '/',
        watchOptions: {
            poll: false
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
});
