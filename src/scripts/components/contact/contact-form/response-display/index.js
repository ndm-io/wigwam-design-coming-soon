'use strict';

var $ = require('jquery'),
    _ = require('lodash');

module.exports = function (element) {
    return function (messages) {
        element.innerHTML = messages.join('<br>');
    };
};