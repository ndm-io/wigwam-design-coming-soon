var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'),
    headerfooter = require('gulp-headerfooter'),
    fs = require('fs');

var paths = require('../homeConstants.js').paths;

module.exports = function () {

    var footer = fs.readFileSync(paths.htmlPartials.footer);

    return gulp.src(paths.html.src)
        .pipe(headerfooter.footer(footer))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.html.dest));
};