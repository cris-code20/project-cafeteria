const { series, watch, src, dest } = require('gulp');

// css and sass

const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourmasp = require('gulp-sourcemaps');
const cssnano = require('cssnano');

// imagenes

const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif')




function buildStyles() {
    return src('src/scss/app.scss')
    .pipe(sourmasp.init())
    .pipe(sass().on('error', sass.logError))
    .pipe( postcss([ autoprefixer(), cssnano() ]) )
    .pipe(sourmasp.write('.'))
    .pipe( dest ('build/css') );
};

function imagenes(){
    return src('src/img/**/*')
    .pipe(  imagemin({ optimizationLevel: 3 }) )
    .pipe ( dest('build/img') )


}

function imgWebp(){
    return src('src/img/**/*.{png,jpg}')
    .pipe(webp())
    .pipe(dest('build/img'))
}

function imgAvif(){
    return src('src/img/**/*.{png, jpg}')
    .pipe(avif())
    .pipe(dest('build/img'))
}

function dev () {
    watch('src/scss/**/*.scss', buildStyles);
    watch('src/img/**/*', imagenes)
    // gulp.watch('src/scss/app.scss', buildStyles);
};

exports.buildStyles = buildStyles;
exports.dev = dev;
exports.imagenes = imagenes
exports.imgWebp = imgWebp
exports.imgAvif = imgAvif
exports.default = series(imgWebp, imgAvif, buildStyles, imagenes,dev)