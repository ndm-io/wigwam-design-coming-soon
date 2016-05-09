var gulp = require('gulp');
var paths = require('../homeConstants.js').paths;

module.exports = function () {
    return gulp.src(paths.favicons.src)
        .pipe(gulp.dest(paths.favicons.dest));
};