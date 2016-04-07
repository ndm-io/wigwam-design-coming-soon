'use strict';

var $ = require('jquery'),
    _ = require('lodash');

var menus = $('.menu');
var html = require('./menu.html');

_.each(menus, function (menu) {
    menu.innerHTML = html;
});
