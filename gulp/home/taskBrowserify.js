var browserify = require('browserify'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    notify = require("gulp-notify"),
    stringify = require('stringify'),
    gulpif = require("gulp-if");

var paths = require('../homeConstants').paths;

module.exports = function() {

    const isProduction = (process.env.mode === 'production');
    console.log("Isproduction: ",isProduction);

    return browserify(paths.browserify.src)
        .transform("babelify", {presets: ["es2015", "react"]})
        .transform(stringify, {
            appliesTo: { includeExtensions: ['.html'] },
            minify: isProduction
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(isProduction, uglify()))
        .pipe(notify('Finished Browserify'))
        .pipe(gulp.dest(paths.browserify.dest))
};