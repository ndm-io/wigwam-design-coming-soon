'use strict';

const $ = require('jquery'),
    _ = require('lodash'),
    routes = require('../../../../../routes').routes,
    dataValidator = require('./data-validator')(localStorage),
    display = require('./response-display'),
    formData = require('./form-data');

const translator = require('../../../translation/exports');

const ID_BUTTON_SUBMIT = "#contact-form-button-submit";

const translatableData = [
    {
        id: "#contact-form-input-email",
        key: "email"
    },
    {
        id: "#contact-form-input-name",
        key: "name"
    },
    {
        id: "#contact-form-textarea-message",
        key: "message"
    }
];

const formattedWord = function (key, language) {
    return translator.translateSingleWord(key, language) + "*";
};

(function () {

    const forms = $('.contact-form'),
        tmpl = require('./contact-form.html');

    const html = $.parseHTML(tmpl);

    const submit = function (e) {

        e.preventDefault();
        const data = formData(e);
        const errors = dataValidator.validate(data);
        const response = $('.ajax-response')[0];
        response.innerHTML = '';

        const responseDisplay = display(response);

        if (errors.length === 0) {
            $.post(routes.postContact.route, data, function (response) {
                responseDisplay(response.messages);
            }, 'json');
        } else {
            responseDisplay(errors);
        }

    };


    _.each(forms, function (form) {

        $(form)
            .append(html)
            .find('form')
            .each(function (i, f) {
                f.addEventListener('submit', submit);
            });

    });

    const language = translator.lang(localStorage);
    $(ID_BUTTON_SUBMIT).text(translator.translateSingleWord("submit", language));

    _.each(translatableData, function (item) {
        $(item.id).attr('placeholder', formattedWord(item.key, language));
    });

})();