var gulp = require('gulp'),
    homePaths = require('./gulp/homeConstants').paths;

/**
 * Home Site Tasks
 */

var homeTaskScripts = require('./gulp/home/taskScripts'),
    homeTaskHtml = require('./gulp/home/taskHtml'),
    homeTaskCss = require('./gulp/home/taskCss'),
    homeTaskImg = require('./gulp/home/taskImg'),
    homeTaskAssets = require('./gulp/home/taskAssets');

gulp.task('scripts', homeTaskScripts);
gulp.task('html', homeTaskHtml);
gulp.task('css', homeTaskCss);
gulp.task('img', homeTaskImg);
gulp.task('assets', homeTaskAssets);

/**
 * Watch Tasks
 */

gulp.task('watch', function () {
    gulp.watch(homePaths.html.src, ['html']);
    gulp.watch(homePaths.css.src, ['css']);
    gulp.watch(homePaths.img.src, ['img']);
    gulp.watch(homePaths.assets.src, ['assets']);
});

gulp.task('heroku:production', ['scripts', 'html', 'css', 'img', 'assets']);

var defaults = ['scripts',
    'html',
    'css',
    'assets',
    'img',
    'watch'
];

gulp.task('default', defaults);