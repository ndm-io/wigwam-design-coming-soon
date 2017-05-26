import data from './data';
import capitalize from './capitalizeFirst';
import $ from 'jquery';

(function () {

    const filterCounter = function (acc, item) {
        if (acc[item.filter] === undefined) {
            acc[item.filter] = 1
        } else {
            acc[item.filter] += 1
        }
        return acc;
    };

    const filterFromKey = function (key) {
        return "." + key;
    };

    const filters = data.reduce(filterCounter, {});

    const userTitles = Object.keys(filters).map(function (key) {
        return {filter: filterFromKey(key), title: capitalize(key), count: filters[key]};
    });

    const titles = [{title: "All", filter:"*", count: data.length, className: "current"}].concat(userTitles);

    const domElements = titles.map(function (item) {
        return $("<li/>")
            .append($("<a/>")
                .attr("data-filter", item.filter)
                .addClass(item.className)
                .html(item.title)
                .append($("<sup/>")
                    .append($("<small/>")
                        .html(item.count))))
    });

    $("#filters").append(domElements);

}());
