var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var consts = require('../homeConstants.js');
var paths = consts.paths;

module.exports = function () {
    return gulp.src(paths.secrets.src)
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.secrets.dest));
};
