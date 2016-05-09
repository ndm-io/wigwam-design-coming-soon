var gulp = require('gulp');
var paths = require('../homeConstants.js').paths;

module.exports = function () {
    return gulp.src(paths.sitemap.src)
        .pipe(gulp.dest(paths.sitemap.dest));
};