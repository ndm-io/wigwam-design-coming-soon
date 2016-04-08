var fs = require('fs-extra');



fs.copy('/persistent-storage/secrets.js', '/config/secrets.js', function (err) {
    if (err) return console.error(err)
    console.log("success!")
});