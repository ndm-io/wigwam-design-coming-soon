const expect = require('chai').expect;
const responseFactory = require('../src/scripts/components/contact/contact-form/response-display');
const striptags = require('striptags');

const translator = require('../src/scripts/translation/exports');
const data = require('../src/scripts/translation/data');

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

    it("handles an empty array", function() {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        responseDisplay([]);
        const expectedResponse = "";

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("handles being passed a string instead of an array", function() {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        responseDisplay("This is a malformed message");
        const expectedResponse = "";

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("translates server message - thank you - into cymraeg", function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const serverResponse = translator.responseMessages.thankYouMessage(translator.languages.english);

        responseDisplay([serverResponse], translator.languages.cymraeg);

        const expectedResponse = translator.responseMessages.thankYouMessage(translator.languages.cymraeg);

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("translates server message - error - into cymraeg", function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const serverResponse = translator.responseMessages.errorMessage(translator.languages.english);

        responseDisplay([serverResponse], translator.languages.cymraeg);

        const expectedResponse = translator.responseMessages.errorMessage(translator.languages.cymraeg);

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("translates server message - missing info - into cymraeg", function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const serverResponse = translator.responseMessages.missingInfoMessage(translator.languages.english);

        responseDisplay([serverResponse], translator.languages.cymraeg);

        const expectedResponse = translator.responseMessages.missingInfoMessage(translator.languages.cymraeg);

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("translates server message - missing info - into english", function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const serverResponse = translator.responseMessages.missingInfoMessage(translator.languages.english);

        responseDisplay([serverResponse], translator.languages.english);

        const expectedResponse = translator.responseMessages.missingInfoMessage(translator.languages.english);

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("translates server message - thank you - into english", function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const language = translator.languages.english;

        const serverResponse = translator.responseMessages.thankYouMessage(language);

        responseDisplay([serverResponse], language);

        const expectedResponse = translator.responseMessages.thankYouMessage(language);

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("handles and unknown server message in english", function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const serverMessage = "This is an unknown message";

        responseDisplay([serverMessage], translator.languages.english);

        const expectedResponse = "This is an unknown message";

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

    it("handles and unknown server message in cymraeg", function () {

        const mockElement = mockElementFactory();
        const responseDisplay = responseFactory(mockElement);

        const serverMessage = "This is an unknown message";

        responseDisplay([serverMessage], translator.languages.cymraeg);

        const expectedResponse = "This is an unknown message";

        expect(mockElement.innerHTML).to.equal(expectedResponse);

    });

});