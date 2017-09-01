const expect = require('chai').expect;

const controller = require('../controllers/ContactControllerMethods');

describe("ContactController", function () {

    describe("Validation Methods", function () {

        describe("dataFromBody", function () {

            it('allows a valid message', function () {

                const name = "Jeffrey";
                const email = "valid@example.com";
                const message = "This is a valid short message that should be unchanged";

                const body = {
                    name: name,
                    email: email,
                    message: message
                };

                const validatedBody = controller.dataFromBody(body, 800, 100);

                expect(validatedBody.name).to.equal(name);
                expect(validatedBody.email).to.equal(email);
                expect(validatedBody.message).to.equal(message);


            });

            it('trims a long message', function () {

                const name = "Jeffrey";
                const email = "valid@example.com";
                const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi metus, pellentesque id tempor sed, egestas vehicula velit. Pellentesque tincidunt rhoncus tincidunt. Proin eget metus eu ipsum elementum vehicula. Nam in gravida libero, sit amet gravida dui. Etiam in lacus vel nulla porttitor aliquam sed facilisis massa. Donec at lorem lectus. Sed neque augue, laoreet quis ultrices ac, vulputate nec risus. Ut luctus porta maximus. Cras pellentesque lobortis orci a viverra. Morbi ex est, luctus rutrum metus et, ultricies efficitur diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce congue ex imperdiet, vulputate urna nec, fringilla augue. Mauris molestie enim fringilla justo venenatis condimentum. In in accumsan risus, eget iaculis purus. Cras porta leo sed lectus amet.";

                const body = {
                    name: name,
                    email: email,
                    message: message
                };

                const validatedBody = controller.dataFromBody(body, 800, 100);

                expect(validatedBody.name).to.equal(name);
                expect(validatedBody.email).to.equal(email);
                expect(validatedBody.message).to.not.equal(message);


            });



        });

        describe('formatMessage', function () {

            it('formats a valid message and returns a string', function () {

                const name = "Jeffrey";
                const email = "valid@example.com";
                const message = "This is a valid short message that should be unchanged";

                const body = {
                    name: name,
                    email: email,
                    message: message
                };

                const messageToSend = controller.formatMessage(body);

                expect(messageToSend).to.be.an('string');


            });

            it('rejects an invalid message', function () {

                const body = {
                    name: "",
                    email: "",
                    message: "A message"
                };

                const messageToSend = controller.formatMessage(body);

                expect(messageToSend).to.be.an('undefined');

            })

        })

    });

});