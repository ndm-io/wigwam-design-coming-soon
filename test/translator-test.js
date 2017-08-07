const expect = require('chai').expect;

const translator = require('../src/scripts/translation/exports');

describe('translator', function () {

    describe('getData', function () {

        it('handles gettings malformed requests from dictionary', function () {
            return translator.getData("none_existance", {})
                .then(function () {
                    throw new Error("Translator should reject missing data");
                })
                .catch(function (error) {
                    expect(error).to.not.equal(undefined);
                })
        });

        it('handles returning valid values', function () {

            const correctValue = "correct value here";
            const data = {
                key: correctValue
            };

            return translator.getData("key", data)
                .then(function (value) {
                    expect(value).to.equal(correctValue);
                });

        });
    });

    describe('translate', function () {

        it('correctly translates home', function () {

            return translator.translate('nav', 'cymraeg', 'home')
                .then(function (translatedText) {
                    expect(translatedText).to.equal("hafan");
                })
                .catch(function (error) {
                    expect(error).to.equal(undefined);
                });

        });

        it('correctly handles single words', function () {

           return translator.translate('singleWords', 'cymraeg', 'design')
               .then(function (translatedText) {
                   expect(translatedText).to.equal("dylunio");
               })
               .catch(function (error) {
                   expect(error).to.equal(undefined);
               });

        });
    });


    describe('formatting', function () {

        it('Capitalizes first with single word', function () {
            const value = "home";
            const result = translator.format(value, {capitalizeFirst: true});

            expect(result).to.equal("Home");
        });

        it('Capitalizes first with sentence', function () {
            const value = "home is were I live";
            const result = translator.format(value, {capitalizeFirst: true});

            expect(result).to.equal("Home is were I live");
        });

        it('titleCases', function () {

            const value = "i like coffee";
            const result = translator.format(value, {titleCase: true});

            expect(result).to.equal("I Like Coffee");

        });

        it('upperCases', function () {

            const value = "a lowercased sentence";
            const result = translator.format(value, {upperCase: true});

            expect(result).to.equal("A LOWERCASED SENTENCE");
        });


    });

    describe('lang()', function () {
        it('returns a language', function () {
            const lang = translator.lang();

            expect(lang).to.a("string");
        });

        it('returns correct language even if localStorage is malformed', function () {

            const mockStorage = {
                getItem: function (key) {
                    return "nonsense";
                }
            };

            const result = translator.lang(mockStorage);

            expect(result).to.equal("english");

        });

        it('returns correct language', function () {

            const mockStorage = {
                getItem: function (key) {
                    return "cymraeg";
                }
            };

            const result = translator.lang(mockStorage);
            expect(result).to.equal("cymraeg");
        })
    });

});