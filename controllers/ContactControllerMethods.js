const striptags = require('striptags');

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const trim = function (str, len) {
    return (str.length > len) ? str.substring(0, len - 3) + "..." : str; //str.substring(0, len);
};

const dataFromBody = function (body, maxMessageLength, maxDataLength) {
    const message = trim(striptags(body.message || ''), maxMessageLength),
        name = trim(striptags(body.name || ''), maxDataLength),
        email = trim(striptags(body.email || ''), maxDataLength);

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

module.exports = {
    dataFromBody: dataFromBody,
    formatMessage: formatMessage
};