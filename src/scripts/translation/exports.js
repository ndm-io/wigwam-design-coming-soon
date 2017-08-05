const data = require('./data');
const TRANSLATION_ERROR_DESC = "==== Translation Error ====";
const $ = require('jquery');

const getData = function (key, dictionary) {
    return new Promise(function (resolve, reject) {

        if (!dictionary) reject(new Error("Unable to find translation"));

        const result = dictionary[key];
        if (result) {
            resolve(result);
        } else {
            reject(new Error("Malformed Request"));
        }
    });
};

const _replace = function (page, lang, key) {
    return getData(page, data)
        .then(function (translations) {
            return getData(lang, translations);
        })
        .then(function (translatedTexts) {
            return getData(key, translatedTexts);
        });
};

const replace = function (page, key) {
    const lang = "cymraeg";

    _replace(page, lang, key)
        .then(function (translatedText) {
            document.write(translatedText);
        })
        .catch(function (error) {
            console.log(TRANSLATION_ERROR_DESC, error);
        });


};

const replaceElements = function (elements, page, lang) {

    elements.each(function (idx, el) {
        const selector = $(el);
        const key = selector.data('options');
        if (key) {
            _replace(page, lang, key)
                .then(function (translatedText) {
                    selector.text(translatedText)
                })
                .catch(function (error) {
                    console.log(TRANSLATION_ERROR_DESC, error);
                });
        }
    });
};

const lang = function () {
    return "cymraeg";
};

module.exports = {
    lang: lang,
    _replace: _replace,
    replace: replace,
    replaceElements: replaceElements,
    getData: getData
};