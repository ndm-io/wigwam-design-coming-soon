const expect = require('chai').expect;

const translator = require('../src/scripts/translation/exports');

describe('translator', function () {

    it('handles gettings malformed requests from dictionary', function () {
        return translator.getData("none_existance", {})
            .then(function() {
                throw new Error("Translator should reject missing data");
            })
            .catch(function(error) {
                expect(error).to.not.equal(undefined);
            })
    });

    it('correctly translates home', function () {

        return translator._replace('nav', 'cymraeg', 'home')
            .then(function (translatedText) {
                expect(translatedText).to.equal("Hafan");
            })
            .catch(function (error) {
                expect(error).to.equal(undefined);
            });

    })

});