const environment = {
    isDev: true,
    hotModule: function() {
        if (this.isDev) {
            return [
                'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
                './app/index.js'
            ]
        }
        return './app/index.js'
    },
    embeddedStyles: function() {
        if (this.isDev) {
            return true;
        }
    }
};

export default environment;
