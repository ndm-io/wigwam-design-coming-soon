
module.exports = {
    twilio: {
        accountSID:process.env.twilioAccountSID,
        authToken:process.env.twilioAuthToken,
        numbers: {
            contact:process.env.twilioNumberContact
        },
        notify:{
            sam:process.env.twilioNotifySam
        }
    }
};