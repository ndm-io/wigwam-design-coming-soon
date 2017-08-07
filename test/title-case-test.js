const expect = require('chai').expect;

const titleCase = require('../src/scripts/utils/titleCase');

describe('titleCase', function () {

    it('handles three word sentences', function () {

        let lowercaseSentence = "i like coffee";
        let resultSentence = titleCase(lowercaseSentence);
        let expectedResult = "I Like Coffee";

        expect(resultSentence).to.equal(expectedResult);

    });

    it('handles empty string', function () {
        let str = "";
        let result = titleCase(str);

        expect(result).to.equal(str);
    });

    it('handles undefined string', function () {

        let result = titleCase(undefined);
        expect(result).to.equal("");

    });

});