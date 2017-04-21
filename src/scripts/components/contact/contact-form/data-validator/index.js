'use strict';

const strings = require('./strings');

exports.validate = function (data) {

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var errors = [];

    if (!data.name || data.name < 3) errors.push(strings.MISSING_NAME);
    if (!data.message || data.message.length < 5) errors.push(strings.MISSING_MESSAGE);
    if (!data.email || !validateEmail(data.email)) errors.push(strings.MISSING_EMAIL);
    if (data.message && data.message.length > 1000) errors.push(strings.LONG_MESSAGE);

    return errors;
};