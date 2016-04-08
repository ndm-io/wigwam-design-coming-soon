var prompt = require('prompt'),
    fs = require('fs'),
    path = require('path');

prompt.start();

prompt.get(['json'], function (err, result) {
    if (err) { return onErr(err); }

    fs.writeFileSync(path.join(__dirname, 'config/secrets.js'), result.json, 'utf8');

    console.log('Command-line input received:');
    console.log(result);
});

function onErr(err) {
    console.log(err);
    return 1;
}