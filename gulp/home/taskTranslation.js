var browserify = require('browserify'),
    gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    stringify = require('stringify'),
    buffer = require('vinyl-buffer'),
    notify = require("gulp-notify");

var paths = require('../homeConstants').paths;

module.exports = function() {

    return browserify(paths.translation.src)
        .transform("babelify", {presets: ["es2015", "react"]})
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html'] },
            minify: true
        })
        .bundle()
        .pipe(source(paths.translation.sourceName))
        .pipe(buffer())
        .pipe(notify('Finished Translation'))
        .pipe(gulp.dest(paths.translation.dest))
};