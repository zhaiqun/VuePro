const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {

        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        // open: 'Google Chrome'
    },
    // devtools: '#eval-source-map',
    module: {
        rules: [{
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: [
                                ["component", {
                                    "libraryName": "mint-ui",
                                    "style": true
                                }]
                            ]

                        }

                    }

                ]
            }, {
                test: /\.vue$/,
                use: ['vue-loader']
            }, {
                test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
                use: [{
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]


            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "css-loader",
                    options: { sourceMap: true }
                }, {
                    loader: "sass-loader",
                    options: { sourceMap: true }
                }]
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'AICODER 全栈线下实习', // 默认值：Webpack App
            filename: 'index.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new VueLoaderPlugin(),
        // new webpack.ProvidePlugin({

        //     $: "jquery",

        //     jQuery: "jquery"

        // })

    ],
    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.js'
    //     }
    // }
};