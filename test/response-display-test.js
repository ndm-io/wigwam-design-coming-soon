const expect = require('chai').expect;
const responseFactory = require('../src/scripts/components/contact/contact-form/response-display');
const striptags = require('striptags');

const mockElementFactory = function () {
    return {
        innerHTML: ""
    };
};

describe('response-display', function () {

    it('removes tags from message', function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const maliciousMessages = [
            "<script>console.log('this is malicious');</script>",
            "<script>console.log('this is malicious 2');</script>"
        ];

        const expectedResult = maliciousMessages.map(function (msg) {
            return striptags(msg);
        })
            .join('<br>');

        responseDisplay(maliciousMessages);
        expect(mockElement.innerHTML).to.equal(expectedResult);
    });

    it("joins multiple lines with a br", function () {

        const msg1 = 'Thank you for your message',
            msg2 = 'It all went well';

        const validMessages = [msg1, msg2];

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        responseDisplay(validMessages);
        const expectedResponse = validMessages.join('<br>');

        expect(mockElement.innerHTML).to.equal(expectedResponse);
    });

    it("handles null data", function() {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        responseDisplay();
        const expectedResponse = "";

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

});