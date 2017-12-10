'use strict';

import data from './data';
import $ from 'jquery';
import {renderTestimonials} from "./render-testimonials";

const parentId = "#testimonials-carousel";

(function () {
    const parent = $(parentId);
    if (parent.length > 0) {
        renderTestimonials(parent, data);
    }
}());