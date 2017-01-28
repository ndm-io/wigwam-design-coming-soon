'use strict';


var $ = require('jquery'),
queryString = require('query-string');

module.exports = function (formElement) {
	var query = $(formElement.target).serialize();
	return queryString.parse(query);
};