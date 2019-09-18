const env = {
    isDev: false,
    hotModule: function() {
        if (this.isDev) {
            return [
                'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false',
                './app/index.js'
            ]
        }
        return './app/index.js'
    },
    embeddedStyles: function() {
        if (this.isDev) {
            return false;
        }
    }
};

export default env;
