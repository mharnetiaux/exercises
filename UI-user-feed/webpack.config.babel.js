import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import OptimizeJSAssetsPlugin from 'babel-minify-webpack-plugin';

const config = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'scripts/[name].bundle.js',
    },
    optimization: {
        minimizer: [new OptimizeJSAssetsPlugin, new OptimizeCSSAssetsPlugin],
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(hbs)$/,
                use: [{ loader: 'handlebars-loader' }],
                exclude: /node_modules/
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].bundle.css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        }),
        new HtmlWebpackPlugin({
            template: './src/views/main.hbs',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};
export default config;
