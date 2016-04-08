/**
 * Module dependencies.
 */

var express = require('express');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var _ = require('lodash');
var path = require('path');

var expressValidator = require('express-validator');
var connectAssets = require('connect-assets');

var app = express();
var http = require('http').Server(app);

var contactController = require(path.join(__dirname, 'controllers/ContactController.js'));
var port = process.env.PORT || 8080;


/**
 * Express configuration.
 *
 */

app.set('port', port);
app.use(compress());
app.use(connectAssets({
    paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js'), path.join(__dirname, 'public/html')],
    helperContext: app.locals
}));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'), {maxAge: 31557600000}));

var r = require('./routes'),
    routes = r.routes;

app.get(routes.index.route, r.routeHandler(routes.index.path));
app.get(routes.about.route, r.routeHandler(routes.about.path));
app.get(routes.contact.route, r.routeHandler((routes.contact.path)));

app.post(routes.postContact.route, contactController.postContact);


/**
 * Error handling routes
 */


// Handle 404
app.use(function (req, res) {
    res.status(404);
    res.sendFile(routes.error.path, '/');
});

// Handle 500
app.use(function (error, req, res) {
    res.status(500);
    res.sendFile(routes.error.path, '/');
});


/**
 * Start Express server.
 */


http.listen(app.get('port'), function () {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;