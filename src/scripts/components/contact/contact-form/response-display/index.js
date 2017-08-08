'use strict';

const striptags = require('striptags');
const translator = require('../../../../translation/exports');

module.exports = function (element) {
    return function (messages, language = translator.languages.english) {

        if (!messages || typeof messages !== "object") {
            element.innerHTML = "";
            return;
        }

        const translatedMessages = messages.map(function (msg) {
            return striptags(msg);
        }).map(function (message) {
            return translator.responseMessages.translatedMessage(message, language);
        });

        element.innerHTML = translatedMessages.join('<br>');
    };
};