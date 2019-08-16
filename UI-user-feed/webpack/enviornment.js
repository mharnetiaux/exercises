const environment = {
    isDev: false,
    hotModule: function() {
        if (this.isDev) {
            return [
                'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false',
                './app/ChatApp.js'
            ]
        }
        return './app/ChatApp.js'
    },
    embeddedStyles: function() {
        if (this.isDev) {
            return false;
        }
    }
};

export default environment;
