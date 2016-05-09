var gulp = require('gulp'),
    _ = require('lodash');
homePaths = require('./gulp/homeConstants').paths;

/**
 * Home Site Tasks
 */

var homeTaskScripts = require('./gulp/home/taskScripts'),
    homeTaskHtml = require('./gulp/home/taskHtml'),
    homeTaskCss = require('./gulp/home/taskCss'),
    homeTaskImg = require('./gulp/home/taskImg'),
    homeTaskAssets = require('./gulp/home/taskAssets'),
    homeTaskBrowserify = require('./gulp/home/taskBrowserify'),
    homeTaskSitemap = require('./gulp/home/taskSitemap');

gulp.task('scripts', homeTaskScripts);
gulp.task('browserify', homeTaskBrowserify);
gulp.task('html', homeTaskHtml);
gulp.task('css', homeTaskCss);
gulp.task('img', homeTaskImg);
gulp.task('assets', homeTaskAssets);
gulp.task('sitemap', homeTaskSitemap);

/**
 * Watch Tasks
 */

gulp.task('watch', function () {
    gulp.watch(homePaths.browserify.watch, ['browserify']);
    gulp.watch(homePaths.html.src, ['html']);
    gulp.watch(homePaths.css.src, ['css']);
    gulp.watch(homePaths.img.src, ['img']);
    gulp.watch(homePaths.assets.src, ['assets']);
});


var build = [
    'browserify',
    'scripts',
    'html',
    'css',
    'assets',
    'img',
    'sitemap'
];

var defaults = _.clone(build);
defaults.push('watch');


gulp.task('build', build);
gulp.task('default', defaults);
