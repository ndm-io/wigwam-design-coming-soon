'use strict';

module.exports = function titleCase(str) {

    if (str == undefined || str.length == 0) {
        return "";
    }

    let words = str.toLowerCase().split(' ');

    for(let i = 0; i < words.length; i++) {
        let letters = words[i].split('');
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join('');
    }
    return words.join(' ');
};