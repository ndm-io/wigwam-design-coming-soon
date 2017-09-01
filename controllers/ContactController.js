'use strict';

const secrets = require('../config/secrets').twilio,
    //Promise = require('promise'),
    twilio = require('twilio'),
    MAX_DATA_LEN = 100,
    MAX_MESSAGE_LEN = 160 * 5;

const controller = require('./ContactControllerMethods');
const translator = require('../src/scripts/translation/exports');

const client = new twilio.RestClient(secrets.accountSID, secrets.authToken);

/* --- Use this to mock twilio api in development --- */
// console.log("***** Development Code Warning *****");
// const client = {
//     messages: {
//         create: function (data) {
//             console.log("Sending...", data);
//             return Promise.resolve();
//         }
//     }
// };


exports.postContact = function (req, res) {

    const data = controller.dataFromBody(req.body, MAX_MESSAGE_LEN, MAX_DATA_LEN);
    const msg = controller.formatMessage(data);

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