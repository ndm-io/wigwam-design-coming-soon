
const data = require("../data");

const init = function (replaceFn) {
    if (window) {
        if (!window.translationData) {
            window.translationData = data;
            window.replace = replaceFn;
        }
    }
};

module.exports = init;