module.exports = {
    twilio: {
        accountSID: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        numbers: {
<<<<<<< HEAD
            contact: process.env.twilioNumberContact
        },
        notify: {
            sam: process.env.twilioNotifySam,
            rob: process.env.twilioNotifyRob,
            notifyDefault: process.env.twilioNotifyDefault
=======
            contact:process.env.TWILIO_NUMBER_CONTACT
        },
        notify:{
            sam:process.env.TWILIO_NOTIFY_SAM,
            rob:process.env.TWILIO_NOTIFY_ROB,
            default:process.env.TWILIO_NOTIFY_DEFAULT
>>>>>>> 1749488af2280dfef22f7bf49503506b3e6eb1a4
        }
    }
};
