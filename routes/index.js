'use strict';

var path = require('path');

exports.routes = {
    index: {
        path: path.join(__dirname, '../public/html/index.html'),
        route: '/'
    },
    about: {
        path: path.join(__dirname, '../public/html/about.html'),
        route: '/about'
    },
    error: {
        path: path.join(__dirname, '../public/html/error.html'),
        route: '/error'
    }
};

exports.routeHandler = function (path) {
    return function (req, res) {
        res.sendFile(path);
    };
};