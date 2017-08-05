const data = require('./data');
const TRANSLATION_ERROR_DESC = "==== Translation Error ====";
const $ = require('jquery');

const ENGLISH = "english";
const CYMRAEG = "cymraeg";
const STORAGE_KEY = "design.wigwam.language";

const lang = function (storage) {
    if (!storage) { return ENGLISH }
    const candidate = storage.getItem(STORAGE_KEY) || ENGLISH;
    if (candidate == ENGLISH || candidate == CYMRAEG) {
        return candidate;
    }
    return ENGLISH;
};

const setLang = function (language) {
    localStorage.setItem(STORAGE_KEY, language);
};

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
    const language = lang(localStorage);

    _replace(page, language, key)
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

module.exports = {
    languages: {
        english: ENGLISH,
        cymraeg: CYMRAEG
    },
    lang: lang,
    setLang: setLang,
    _replace: _replace,
    replace: replace,
    replaceElements: replaceElements,
    getData: getData
};