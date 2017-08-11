'use strict';

const secrets = require('../config/secrets').twilio,
    //Promise = require('promise'),
    striptags = require('striptags'),
    twilio = require('twilio'),
    MAX_DATA_LEN = 100,
    MAX_MESSAGE_LEN = 1000,
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const translator = require('../src/scripts/translation/exports');

//const client = new twilio.RestClient(secrets.accountSID, secrets.authToken);

/* --- Use this to mock twilio api in development --- */
console.log("***** Development Code Warning *****");
const client = {
    messages: {
        create: function (data) {
            console.log("Sending...", data);
            return Promise.resolve();
        }
    }
};



const trim = function (str, len) {
    return (str.length > len) ? str.substring(0, len - 3) + "..." : str.substring(0, len);
};

const dataFromBody = function (body) {
    const message = trim(striptags(body.message || ''), MAX_MESSAGE_LEN),
        name = trim(striptags(body.name || ''), MAX_DATA_LEN),
        email = trim(striptags(body.email || ''), MAX_DATA_LEN);

    return {name: name, email: email, message: message};
};

const checkData = function (data) {
    return (data.name.length > 0 && data.email.length > 0 && re.test(data.email));
};

const formatMessage = function (data) {

    if (!checkData(data)) return;

    return [
        'New Msg: ',
        data.name,
        '\n',
        data.email,
        '\n',
        data.message
    ].join('');
};

exports.postContact = function (req, res) {

    const data = dataFromBody(req.body);
    const msg = formatMessage(data);

    if (msg) {

        client.messages.create({
            to: process.env.TWILIO_NOTIFY_DEFAULT,
            from: process.env.TWILIO_NUMBER_CONTACT,
            body: msg
        })
            .then(function () {
                const message = translator.responseMessages.thankYouMessage(translator.languages.english);
                res.send({status: 'success', messages: [message]});
            })
            .catch(function (err) {
                console.log(err);
                const message = translator.responseMessages.errorMessage(translator.languages.english);
                res.send({status: 'fail', messages: [message]});
            });

    } else {
        const message = translator.responseMessages.missingInfoMessage(translator.languages.english);
        res.send({status: 'fail', messages: [message]});
    }

};