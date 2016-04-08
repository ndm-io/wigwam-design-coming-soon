'use strict';

exports.validate = function (data) {

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    var errors = [];

    if (!data.name || data.name < 3) errors.push('Please include your name');
    if (!data.message || data.message < 5) errors.push('Please tell us what your contact is about!');
    if (!data.email || !validateEmail(data.email)) errors.push('We need a valid email address to get back to you');

    return errors;
};