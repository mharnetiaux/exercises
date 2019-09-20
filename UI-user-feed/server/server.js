import express from 'express';
import exphbs  from 'express-handlebars';
import webpack from 'webpack';
import webpack_dev_middleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.babel';

const app = express(),
      port = '8080',
      compiler = webpack(webpackConfig),
      middleware = webpack_dev_middleware(compiler);

app.set('view engine', 'hbs', 'views');

app.set('views','./server/views');

app.engine('hbs', exphbs());

app.use(express.static(webpackConfig.output.path), middleware);

app.get('/',(req, res) => {
    "use strict";
    res.render('main');
});

app.listen(port);
