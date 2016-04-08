module.exports = {
    twilio: {
        accountSID: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        numbers: {
            contact: process.env.twilioNumberContact
        },
        notify: {
            sam: process.env.twilioNotifySam,
            rob: process.env.twilioNotifyRob,
            notifyDefault: process.env.twilioNotifyDefault
        }
    }
};