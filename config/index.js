/**
 * Created by rob on 26/05/2017.
 */

require('dotenv').config();

var secrets = require('./secrets');

if (!secrets.twilio.authToken || !secrets.twilio.accountSID) {
    throw "Twilio environment vars are missing";
}
