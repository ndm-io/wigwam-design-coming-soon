/*
 <div class="work-item tall branding">
 <a>
 <img src="img/elegant-floor-lamp.jpg" alt="Elegant Floor Lamp">
 <div class="work-caption font-alt">
 <h3 class="work-title">Elegant</h3>
 <div class="work-descr">
 Web / Photo
 </div>
 </div>
 </a>
 </div>
 */

import data from './data';
import capitialize from './capitalizeFirst';
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


