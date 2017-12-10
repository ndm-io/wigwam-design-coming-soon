import $ from 'jquery';

export const divForTestimonial = function (testimonial) {
    return $("<div/>")
        .addClass("item testimonial grabbing")
        .append($("<h5/>")
            .addClass("module-icon m-b-20")
            .append($("<i/>")
                .addClass("ion-ios-chatboxes-outline"))
        )
        .append($("<div/>")
            .addClass("font-serif m-b-20")
            .text(testimonial.text || ""))
        .append($("<div/>")
            .addClass("quote-author font-alt")
            .text(testimonial.author || ""))
};