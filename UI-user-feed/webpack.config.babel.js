import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'scripts/[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
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
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
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
            template: path.resolve(__dirname, './server/views/main.hbs'),
            inject: 'body',
            filename: 'index.html'
        })
    ]
};
export default config;
