'use strict';

import data from './data';
import $ from 'jquery';
import {renderTestimonials} from "./render-testimonials";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const parentId = "#testimonials-carousel";

(function () {
    const parent = $(parentId);
    if (parent.length > 0) {
        renderTestimonials(parent, data);
    }
}());