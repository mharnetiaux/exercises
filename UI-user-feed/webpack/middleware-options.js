import path from 'path';
import webpackConfig from '../webpack.config.babel';

const middleware_options = {
    publicPath:webpackConfig.output.publicPath,
    contentBase:path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    open: true,
    port: 8080,
    inline: true,
    noInfo: false,
    overlay: {
        warnings: true,
        errors: true
    },
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
    }
};

export default middleware_options;
