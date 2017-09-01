'use strict';

const translator = require('../../../../translation/exports');

const validateEmail = function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

module.exports = function (storage) {
    return {
        validate: function (data) {

            let errors = [];

            const msgs = translator.errorMessages.contact;
            const lang = translator.lang(storage);

            if (!data.name || data.name < 3) errors.push(msgs.missingName(lang));
            if (!data.message || data.message.length < 5) errors.push(msgs.missingMessage(lang));
            if (!data.email || !validateEmail(data.email)) errors.push(msgs.missingEmail(lang));
            if (data.message && data.message.length > 1000) errors.push(msgs.messageTooLong(lang));

            return errors;
        }
    }
};