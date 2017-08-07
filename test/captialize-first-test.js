const expect = require('chai').expect;

const captalize = require('../src/scripts/utils/capitalizeFirstLetter');

describe('capitalizeFirst', function () {

    it('handles sentences', function () {

        let lowercaseSentence = "i like coffee";
        let resultSentence = captalize(lowercaseSentence);
        let expectedResult = "I like coffee";

        expect(resultSentence).to.equal(expectedResult);

    });

    it('handles empty string', function () {
        let str = "";
        let result = captalize(str);

        expect(result).to.equal(str);
    });

    it('handles undefined string', function () {

        let result = captalize(undefined);

        expect(result).to.equal("");

    });

});