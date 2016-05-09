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
    contact: {
        path:path.join(__dirname, '../public/html/contact.html'),
        route: '/contact'
    },
    postContact: {
        route: '/send'
    },
    error: {
        path: path.join(__dirname, '../public/html/error.html'),
        route: '/error'
    },
    sitemap: {
        path: path.join(__dirname, '../public/sitemap.xml'),
        route: '/sitemap.xml'
    }
};

exports.routeHandler = function (path) {
    return function (req, res) {
        res.sendFile(path);
    };
};