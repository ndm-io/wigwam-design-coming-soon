const expect = require('chai').expect;
const data = require('../src/scripts/components/testimonials/data');

describe("testimonials", function () {

    describe("data", function () {

        it("exports correctly formatted data for testimonials page", function () {
            for (let i = 0; i < data.length; i++) {
                expect(data[i]).to.have.all.keys('text', 'author');
            }
        });

    });

});