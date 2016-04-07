var browserify = require('browserify'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    notify = require("gulp-notify"),
    stringify = require('stringify');

var paths = require('../homeConstants').paths;

module.exports = function() {
    return browserify(paths.browserify.src)
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html'] },
            minify: true
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(notify('Finished Browserify'))
        .pipe(gulp.dest(paths.browserify.dest))
};