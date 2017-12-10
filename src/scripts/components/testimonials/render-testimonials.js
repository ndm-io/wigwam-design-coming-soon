'use strict';

import {divForTestimonial} from "./div-for-testimonial";

export const renderTestimonials = function (jqueryElement, testimonials) {
    jqueryElement.append(testimonials.map(divForTestimonial));
};