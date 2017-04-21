const expect = require('chai').expect;

const dataValidator = require('../src/scripts/components/contact/contact-form/data-validator');
const strings = require('../src/scripts/components/contact/contact-form/data-validator/strings');

const validShortMessage = "This is a valid but short message for tests of contact controller";
const validName = "Dorothy";
const validEmail = "valid@example.com";

const invalidMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac quam tempus, tristique dui sed, ornare ipsum. Nulla vitae leo sollicitudin, mollis nunc non, varius magna. Praesent in vehicula justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius, nisl eu iaculis rhoncus, risus est laoreet metus, sed blandit lectus libero sit amet ex. Suspendisse vitae placerat ante. Morbi faucibus gravida risus, eget fermentum tellus facilisis quis. Donec venenatis nisi at purus ullamcorper condimentum. Aenean dapibus nisl risus, accumsan facilisis ligula fermentum eget. Quisque condimentum vel enim vitae fringilla. Aliquam et ornare turpis, ac scelerisque sem. Ut cursus varius sapien, nec scelerisque tortor tincidunt eget. Phasellus commodo, ante sit amet mattis vestibulum, nulla quam rutrum turpis, at condimentum orci lorem sit amet nunc. Sed fringilla semper sem, ac elementum velit commodo ut. Ut dictum scelerisque lorem in varius. Integer et gravida ex. Suspendisse ac pellentesque metus.";

const missingName = {
    name: undefined,
    email: "valid@example.com",
    message: validShortMessage
};

const missingEmail = {
    name: validName,
    email: undefined,
    message: validShortMessage
};

const missingMessage = {
    name: validName,
    email: validEmail,
    message: undefined
};

const emptyName = {
    name: "",
    email: validEmail,
    message: validShortMessage
};

const emptyEmail = {
    name: validName,
    email: "",
    message: validShortMessage
};

const emptyMessage = {
    name: validName,
    email: validEmail,
    message: ''
};

const messageTooLong = {
    name: validName,
    email: validEmail,
    message: invalidMessage
};

const invalidEmail1 = {
    name: validName,
    email: 'email',
    message: validShortMessage
};

const invalidEmail2 = {
    name: validName,
    email: 'email@email',
    message: validShortMessage
};

describe('data-validator', function () {

    describe('deals with single errors', function () {

        it('rejects with correct description on missing name', function () {
            const result = dataValidator.validate(missingName);
            expect(result[0]).to.equal(strings.MISSING_NAME);
        });

        it('rejects with correct description on missing email', function () {
            const result = dataValidator.validate(missingEmail);
            expect(result[0]).to.equal(strings.MISSING_EMAIL);
        });

        it('rejects with correct description on missing message', function () {
            const result = dataValidator.validate(missingMessage);
            expect(result[0]).to.equal(strings.MISSING_MESSAGE);
        });

        it('rejects with correct description on empty name', function () {
            const result = dataValidator.validate(emptyName);
            expect(result[0]).to.equal(strings.MISSING_NAME);
        });

        it('rejects with correct description on empty email', function () {
            const result = dataValidator.validate(emptyEmail);
            expect(result[0]).to.equal(strings.MISSING_EMAIL);
        });

        it('rejects with correct description on empty message', function () {
            const result = dataValidator.validate(emptyMessage);
            expect(result[0]).to.equal(strings.MISSING_MESSAGE);
        });

        it('rejects with correct description on too long message', function () {
            const result = dataValidator.validate(messageTooLong);
            expect(result[0]).to.equal(strings.LONG_MESSAGE);
        });

        it('rejects with correct description on invalid email 1', function () {
            const result = dataValidator.validate(invalidEmail1);
            expect(result[0]).to.equal(strings.MISSING_EMAIL);
        });

        it('rejects with correct description on invalid email 2', function () {
            const result = dataValidator.validate(invalidEmail2);
            expect(result[0]).to.equal(strings.MISSING_EMAIL);
        });

    });

    describe('deals with multiple errors', function() {

        it('rejects with descriptions on missing name and email', function () {
            const data = {
                name: '',
                email: '',
                message: validShortMessage
            };
            const result = dataValidator.validate(data);
            expect(result).to.have.length(2);
        });

        it('rejects with descriptions on undefined name and email', function () {
            const data = {
                name: undefined,
                email: undefined,
                message: validShortMessage
            };
            const result = dataValidator.validate(data);
            expect(result).to.have.length(2);
        });

        it('rejects with descriptions on undefined name, email and message', function () {
            const data = {
                name: undefined,
                email: undefined,
                message: undefined
            };
            const result = dataValidator.validate(data);
            expect(result).to.have.length(3);
        });

        it('rejects with descriptions on empty name, invalid email and long message', function () {
            const data = {
                name: '',
                email: invalidEmail1,
                message: invalidMessage
            };
            const result = dataValidator.validate(data);
            expect(result).to.have.length(3);
        });


    });
});