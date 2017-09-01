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
    let hasSubmitted = false;

    const submit = function (e) {

        e.preventDefault();
        if (hasSubmitted) { return; }

        const data = formData(e);
        const errors = dataValidator.validate(data);
        const response = $('.ajax-response')[0];
        response.innerHTML = '';

        const responseDisplay = display(response);

        if (errors.length === 0) {
            hasSubmitted = true;
            $(ID_BUTTON_SUBMIT).attr("disabled", "disabled");
            $.post(routes.postContact.route, data, function (response) {
                const language = translator.lang(localStorage);
                responseDisplay(response.messages, language);
            }, 'json');
        } else {
            responseDisplay(errors);
        }

    };

    const onChange = function (maxLength) {

        return function (e) {
            let element = e.currentTarget;
            let length = element.value.length;

            let innerHTML = "";
            if (length <= maxLength) {
                innerHTML = "";
            } else {
                element.value = element.value.substr(0, maxLength);
                innerHTML = "Oops, this is too long, max " + maxLength + " characters please";
            }

            let parent = $(element).parent();
            parent
                .find('.help-block')
                .each(function (i, f) {
                    f.innerHTML = innerHTML
                });
        }

    };


    _.each(forms, function (form) {

        $(form)
            .append(html)
            .find('form')
            .each(function (i, f) {
                f.addEventListener('submit', submit);
            });

        $(form)
            .find(".form-control")
            .each(function (i, f) {
                const jEl = $(f);
                const maxLen = parseInt(jEl.attr('data-options'));
                jEl.bind('input propertychange', onChange(maxLen));
            });


    });

    const language = translator.lang(localStorage);
    $(ID_BUTTON_SUBMIT).text(translator.translateSingleWord("submit", language));

    _.each(translatableData, function (item) {
        $(item.id).attr('placeholder', formattedWord(item.key, language));
    });

})();