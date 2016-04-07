'use strict';

var $ = require('jquery'),
    _ = require('lodash');

var forms = $('.contact-form');
var tmpl = require('./contact-form.html');

var html = $.parseHTML(tmpl);

var submit = function (e) {
    console.log('submit event',e);
    e.preventDefault();
};


_.each(forms, function (form) {

    var el = $(form);
    el.append(html);

    el.find('form')
        .each(function (i, f) {
            f.addEventListener('submit', submit);
        });

    //.addEventListener('submit', submit);

});