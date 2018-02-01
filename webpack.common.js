const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const extractSass = new ExtractTextPlugin('css/[name].css');
const merge = require('webpack-merge');

var baseConf = {
    context: path.join(__dirname, 'web'),
    entry: {
        main: './app.js',
        vendor: [
            'bootstrap/js/dist/util',
            'bootstrap/js/dist/alert',
            'bootstrap/js/dist/button',
            'bootstrap/js/dist/carousel',
            'bootstrap/js/dist/collapse',
            'bootstrap/js/dist/dropdown',
            'bootstrap/js/dist/modal',
            'bootstrap/js/dist/tooltip',
            'bootstrap/js/dist/popover',
            'bootstrap/js/dist/scrollspy',
            'bootstrap/js/dist/tab',
            '@fancyapps/fancybox/dist/jquery.fancybox'
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            'name': 'vendor'
        }),
        // remove duplicate
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new CopyWebpackPlugin([
                {from: 'css/**/*'}
            ],
            {
                ignore: ['*.scss']
            }
        ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
            Button: 'exports-loader?Button!bootstrap/js/dist/button',
            Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
            Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
            Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
            Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
            Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
            Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
            Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: 'exports-loader?Util!bootstrap/js/dist/util'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: false, // copy loaded files in css
                            useRelativePath: true,
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    emitFile: false,
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /(\.css$)/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    }
};

var webConf = merge(baseConf, {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'web/dist'),
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    }
});



var wpConf = merge(baseConf, {
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'wp/wp-content/themes/template/dist'),
        hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'
    }
});


module.exports = [
    webConf,
    /*wpConf */];
