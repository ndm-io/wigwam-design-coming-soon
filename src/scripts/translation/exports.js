const data = require('./data');
const TRANSLATION_ERROR_DESC = "==== Translation Error ====";
const TRANSLATION_ERROR_END = "===========================";
const $ = require('jquery');

const capitalizeFirst = require('../utils/capitalizeFirstLetter');
const titleCase = require('../utils/titleCase');

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
            console.log("** Error Malformed Request **");
            console.log("Dictionary: ", dictionary);
            console.log("Key: ", key);
            console.log("******************************");
            reject(new Error("Malformed Request"));
        }
    });
};

const translate = function (page, lang, key) {
    return getData(page, data)
        .then(function (translations) {
            return getData(lang, translations);
        })
        .then(function (translatedTexts) {
            return getData(key, translatedTexts);
        });
};

const translateSingleWord = function (key, language) {
    const languageResults = data.singleWords[language];
    if (!languageResults) { return key; }
    const result = languageResults[key];
    if (!result) { return key; }
    return result;
};

const toId = function (label) {
    if (label[0] !== "#") {
        return "#" + label;
    }
    return label;
};

const format = function (text, opts) {
    let formattedText = text;
    if (opts.capitalizeFirst) {
        formattedText = capitalizeFirst(formattedText);
    }
    if (opts.titleCase) {
        formattedText = titleCase(formattedText);
    }
    if (opts.upperCase) {
        formattedText = formattedText.toUpperCase();
    }
    return formattedText;
};

const setText = function (label, text) {
    const element = $(toId(label));
    if (element.length === 0) {
        console.log("===== Replacing Error ====");
        console.log("Not found: ", label);
        console.log("==========================")
    }
    $(toId(label)).text(text);
};

const log = function (error, label, page, key) {
    console.log(TRANSLATION_ERROR_DESC);
    console.log("Error: ", error);
    console.log("Label: " + label + " | Page: " + page + " | Key: " + key);
    console.log(TRANSLATION_ERROR_END);
};

const replace = function (label, page, key, opts = {}) {
    const language = lang(localStorage);

    translate(page, language, key)
        .then(function (translatedText) {

            const formattedTranslation = format(translatedText, opts);
            setText(label, formattedTranslation);
        })
        .catch(function (error) {
            log(error, label, page, key);
        });


};

const replaceElements = function (elements, page, lang) {

    elements.each(function (idx, el) {
        const selector = $(el);
        const key = selector.data('options');
        if (key) {
            translate(page, lang, key)
                .then(function (translatedText) {
                    selector.text(translatedText);
                })
                .catch(function (error) {
                    log(error, selector.id, page, key)
                });
        }
    });
};

module.exports = {
    languages: {
        english: ENGLISH,
        cymraeg: CYMRAEG
    },
    format: format,
    lang: lang,
    setLang: setLang,
    translate: translate,
    translateSingleWord: translateSingleWord,
    replace: replace,
    replaceElements: replaceElements,
    getData: getData
};