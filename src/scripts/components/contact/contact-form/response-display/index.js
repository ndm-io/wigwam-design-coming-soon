'use strict';

const striptags = require('striptags');

module.exports = function (element) {
    return function (messages) {

        if (!messages) {
            element.innerHTML = "";
            return;
        }

        const strippedMessages = messages.map(function(msg) {
            return striptags(msg);
        });

        element.innerHTML = strippedMessages.join('<br>');
    };
};