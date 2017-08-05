'use strict';

var $ = require('jquery'),
    _ = require('lodash');

var navs = $('.navigation');
var tmpl = require('./navigation.html');

var html = $.parseHTML(tmpl);

var translator = require('../../../translation/exports');

_.each(navs, function (nav) {

    var el = $(nav);
    var classes = el.data('options');

    el.append(html)
        .find('nav')
        .addClass(classes);

    el.find('.brand-logo')
        .attr('src', el.data('logo'));

    var tags = $(html)
        .find('a');

    translator.replaceElements(tags, 'nav', translator.lang(localStorage));
});

