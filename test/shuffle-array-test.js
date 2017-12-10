const expect = require('chai').expect;

import {shuffleArray} from "../src/scripts/components/testimonials/shuffle-array";

const generate = function (amount) {
    const arr = [];

    for (let i = 0; i < amount; i++) {
        arr.push({text: `${i}`, author: `${i}`});
    }

    return arr;
};

describe("shuffleArray", function () {

    it("returns a new array", function () {

        const oldArray = generate(10);
        console.log(oldArray);

    })

});