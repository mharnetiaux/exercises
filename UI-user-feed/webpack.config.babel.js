import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'scripts/[name].bundle.js',
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                }),
                exclude: /node_modules/
            },
            {
                test: /\.(hbs)$/,
                use: [{ loader: 'handlebars-loader' }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/[name].bundle.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './server/views/main.hbs'),
            inject: 'body',
            filename: 'index.html'
        })
    ]
};
export default config;
