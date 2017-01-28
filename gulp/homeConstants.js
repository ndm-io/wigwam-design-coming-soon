var paths = {
    browserify: {
        src: 'src/scripts/app.js',
        watch: [
        'src/scripts/*.js',
        'src/scripts/**/**/*.js',
        'src/scripts/**/*.html'
        ],
        dest: 'public/js'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'public/js'
    },
    html: {
        src: ['src/html/**/*.html', '!./src/html/partials/*'],
        dest: 'public/html'
    },
    htmlPartials: {
        header: 'src/html/partials/header.html',
        footer: 'src/html/partials/footer.html'
    },
    css: {
        src: 'src/css/*.css',
        dest: 'public/css'
    },
    img: {
        src: 'src/img/**/*',
        dest: 'public/img'
    },
    assets: {
        src: 'src/assets/**/*',
        dest: 'public/assets'
    },
    sitemap: {
        src: 'src/*.xml',
        dest: 'public'
    },
    favicons: {
        src: 'src/favicons/*',
        dest: 'public'
    }
};

var vortexScriptsOrder = [
"jquery-2.1.3.min.js",
"bootstrap.min.js",
"jquery.superslides.min.js",
"jquery.mb.YTPlayer.min.js",
"jquery.magnific-popup.min.js",
"owl.carousel.min.js",
"jquery.simple-text-rotator.min.js",
"imagesloaded.pkgd.js",
"isotope.pkgd.min.js",
"packery-mode.pkgd.min.js",
"appear.js",
"jquery.easing.1.3.js",
"wow.min.js",
"jquery.fitvids.js",
"jquery.parallax-1.1.3.js",
"smoothscroll.js",
"contact.js",
"custom.js"
];

module.exports.paths = paths;
module.exports.vortexScriptsOrder = vortexScriptsOrder;