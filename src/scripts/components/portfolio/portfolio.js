'use strict';

import data from './data';
import capitialize from '../../utils/capitalizeFirstLetter';
import $ from 'jquery';


(function () {

    const classFor = function (item) {
        return "work-item" + " " + item.size + " " + item.filter;
    };

    const domElements = data.map(function (item) {
        return $("<div/>")
            .addClass(classFor(item))
            .append($("<a/>")
                .append($("<img/>")
                    .attr("alt", item.alt)
                    .attr("src", item.src))
                .append($("<div/>")
                    .addClass("work-caption font-alt")
                    .append($("<h3/>")
                        .addClass("work-title")
                        .html(capitialize(item.filter)))
                    .append($("<div/>")
                        .addClass("work-descr")
                        .html(item.hoverDesc)
                        .append($("<br/>"))
                        .append($("<small/>")
                            .html(item.credit)))))

    });

    $("#works-grid").append(domElements);

}());


