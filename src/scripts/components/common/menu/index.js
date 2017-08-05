'use strict';

var $ = require('jquery'),
    _ = require('lodash');

var menus = $('.menu');
var html = require('./menu.html');

var translator = require('../../../translation/exports');

var style = function(element) {
    element.css('cursor', 'pointer');
    element.css('text-decoration', 'underline');
};

var clickHandler = function (language) {
    return function () {
        translator.setLang(language);
        window.location.reload(false);
    };
};

_.each(menus, function (menu) {
    menu.innerHTML = html;

    var tags = $(menu)
        .find('a');

    translator.replaceElements(tags, 'nav', translator.lang(localStorage));

    const englishSelector = $('#englishSelector');
    const cymraegSelector = $('#cymraegSelector');

    style(cymraegSelector);
    style(englishSelector);

    englishSelector.click(clickHandler(translator.languages.english));
    cymraegSelector.click(clickHandler(translator.languages.cymraeg));

});
