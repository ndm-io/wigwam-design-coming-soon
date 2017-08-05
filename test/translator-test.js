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

    describe('_replace', function () {
        it('_replace - correctly translates home', function () {

            return translator._replace('nav', 'cymraeg', 'home')
                .then(function (translatedText) {
                    expect(translatedText).to.equal("Hafan");
                })
                .catch(function (error) {
                    expect(error).to.equal(undefined);
                });

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