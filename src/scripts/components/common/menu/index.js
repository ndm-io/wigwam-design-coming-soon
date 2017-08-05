'use strict';

var $ = require('jquery'),
    _ = require('lodash');

var menus = $('.menu');
var html = require('./menu.html');

var translator = require('../../../translation/exports');

_.each(menus, function (menu) {
    menu.innerHTML = html;

    var tags = $(menu)
        .find('a');

    translator.replaceElements(tags, 'nav', translator.lang());
});
