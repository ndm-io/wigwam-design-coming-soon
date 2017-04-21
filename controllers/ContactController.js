'use strict';

var // secrets = require('../config/secrets').twilio,
    Promise = require('promise'),
    striptags = require('striptags'),
    twilio = require('twilio'),
    MAX_DATA_LEN = 100,
    MAX_MESSAGE_LEN = 1000,
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//var client = new twilio.RestClient();
const client = {
    messages: {
        create: function (data) {
            console.log("Sending...", data);
            return Promise.resolve();
        }
    }
};

var trim = function (str, len) {
    return (str.length > len) ? str.substring(0, len - 3) + "..." : str.substring(0, len);
};

var dataFromBody = function (body) {
    var message = trim(striptags(body.message || ''), MAX_MESSAGE_LEN),
        name = trim(striptags(body.name || ''), MAX_DATA_LEN),
        email = trim(striptags(body.email || ''), MAX_DATA_LEN);

    return {name: name, email: email, message: message};
};

var checkData = function (data) {
    return (data.name.length > 0 && data.email.length > 0 && re.test(data.email));
};

var formatMessage = function (data) {

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

    var data = dataFromBody(req.body);
    var msg = formatMessage(data);

    if (msg) {

        client.messages.create({
            to: process.env.TWILIO_NOTIFY_DEFAULT,
            from: process.env.TWILIO_NUMBER_CONTACT,
            body: msg
        })
            .then(function () {
                res.send({status: 'success', messages: ['Thank you for your message, we will be in touch right away']});
            })
            .catch(function (err) {
                console.log(err);
                res.send({status: 'fail', messages: ['Something bad happened and we could not send the message']});
            });

    } else {
        res.send({status: 'fail', messages: ['Some information is missing to enable us to make contact']});
    }

};