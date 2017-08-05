'use strict';

var translator = require('./exports');

(function () {

    if (window) {
        window.replace = translator.replace;
    }

}());


