'use strict';

var $ = require('jquery'),
    _ = require('lodash');

var footers = $('.footer');
var html = require('./footer.html');

const translator = require('../../../translation/exports');

_.each(footers, function (footer) {
    footer.innerHTML = html;

    translator.replace("common-footer-allrightsreserved",
        "nav",
        "allRightsReserved",
        {titleCase: true});

});


