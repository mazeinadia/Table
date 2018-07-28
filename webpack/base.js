const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (defined = {}) => {
    return {
        context: path.join(__dirname, '..', 'src'),
        entry: {
            index: './index.js',
            vendor: [
                'react',
                'react-dom',
                'react-router-dom',
                'react-redux',
                'redux',
                'redux-thunk',
                'redux-logger'
            ],
        },
        output: {
            path: path.join(__dirname, '..', 'public'),
            filename: '[name].js'
        },
        resolve: {
            modules: ['node_modules']
        },
        plugins: [
            new webpack.DefinePlugin({
                DEMO_API: JSON.stringify(defined.DEMO_API ? true : false),
                REDUX_LOGGING: JSON.stringify(defined.REDUX_LOGGING ? true : false)
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new HtmlWebpackPlugin({
                template: './index.html',
                showErrors: true,
                chunks: ['vendor', 'index']
            })

        ],
        optimization: {
            splitChunks: {
                chunks (chunk) {
                    return chunk.name !== "index"
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.(pcss|css)$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader']
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.(jsx|js)$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'react',
                            'es2017',
                            'stage-0'
                        ],
                        plugins: [
                            'transform-decorators-legacy'
                        ]
                    }
                },
                {
                    test: /.*\.(gif|png|jpe?g|svg)$/i,
                    loaders: [
                        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
                    ]
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    use: 'file-loader'
                }
            ]
        }
    };
};
