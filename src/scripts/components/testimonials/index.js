'use strict';

import data from './data';
import $ from 'jquery';
import {renderTestimonials} from "./render-testimonials";
import {shuffleArray} from "./shuffle-array";

const parentId = "#testimonials-carousel";

(function () {
    const parent = $(parentId);
    if (parent.length > 0) {
        renderTestimonials(parent, shuffleArray(data));
    }
}());