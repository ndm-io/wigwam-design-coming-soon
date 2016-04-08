'use strict';

var $ = require('jquery'),
    _ = require('lodash'),
    routes = require('../../../../../routes').routes,
    dataValidator = require('./data-validator'),
    display = require('./response-display'),
    formData = require('./form-data');

(function () {

    var forms = $('.contact-form'),
        tmpl = require('./contact-form.html');

    var html = $.parseHTML(tmpl);

    var submit = function (e) {

        e.preventDefault();
        var data = formData(e);
        var errors = dataValidator.validate(data);
        var response = $('.ajax-response')[0];
        response.innerHTML = '';

        var responseDisplay = display(response);

        if (errors.length == 0) {
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


})();