'use strict';

var $ = require('jquery'),
    _ = require('lodash');

var footers = $('.footer');
var html = require('./footer.html');

_.each(footers, function (footer) {
    footer.innerHTML = html;
});


