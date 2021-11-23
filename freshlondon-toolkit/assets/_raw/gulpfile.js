// Requires Gulp v4.
// $ npm uninstall --global gulp gulp-cli
// $ rm /usr/local/share/man/man1/gulp.1
// $ npm install --global gulp-cli
// $ npm install
const {src, dest, watch, series, parallel} = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sasslint = require('gulp-sass-lint');
const cache = require('gulp-cached');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
// npm install -save gulp gulp-sass gulp-autoprefixer gulp-plumber gulp-sass-lint gulp-cached

// // Compile CSS from Sass.
// function buildStylesAdmin() {
// 	return src('scss/superbill_admin.scss')
// 		.pipe(plumber()) // Global error listener.
// 		// .pipe(sourcemaps.init({loadMaps: false}))
// 		.pipe(sass({outputStyle: 'compressed'}))
// 		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
// 		// .pipe(sourcemaps.write(false))
// 		.pipe(dest('admin'))
// }

// Compile CSS from Sass.
function buildStylesFront () {
	return src('scss/fl-toolkit.scss')
		.pipe(plumber()) // Global error listener.
		// .pipe(sourcemaps.init({loadMaps: false}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
		// .pipe(sourcemaps.write(false))
		.pipe(dest('../compiled'))
}

// // Compile JS from files.
// gulp.task('scripts', function () {
// 	return gulp.src('./lib/*.js')
// 		.pipe(concat('all.js'))
// 		.pipe(gulp.dest('./dist/'));
// });

// Watch changes on all *.scss files and trigger buildStyles() at the end.
function watchFiles () {
	watch(
		['scss/components/*.scss', 'scss/lib/*.scss', 'scss/*.scss'],
		{events: 'all', ignoreInitial: false},
		// series(buildStylesFront, buildStylesClient)
		series(buildStylesFront)
	);
	watch(
		['js/lib/*'],
		{events: 'all', ignoreInitial: false},
		series(scriptsHeader)
	);
	watch(
		['js/components/*'],
		{events: 'all', ignoreInitial: false},
		series(scriptsFooter)
	);
}

function scriptsHeader () {
	return src([
		'js/lib/setFontSize.js',
	])
		.pipe(concat('header.js'))
		.pipe(dest('../compiled'));
}

function scriptsFooter () {
	return src([
		'js/components/footerscripts.js',
	])
		.pipe(concat('footer.js'))
		.pipe(dest('../compiled'));
}

// minifying stuff
function JavaScriptMin () {
	return src(['js/*/*.js'])
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../minified/'))
}

function cssMin () {
	return src(['../css/*.css'])
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('../minified/'));
}

// Init Sass linter.
// function sassLint() {
// 	return src(['scss/admin/*.scss', 'scss/client/*.scss'])
// 		.pipe(cache('sasslint'))
// 		.pipe(sasslint({
// 			configFile: '.sass-lint.yml'
// 		}))
// 		.pipe(sasslint.format())
// 		.pipe(sasslint.failOnError());
// }

// Export commands.
// exports.default = parallel(sassLint, watchFiles); // $ gulp
// exports.sass = buildStylesFront; // $ gulp sass
// exports.sass = buildStylesClient; // $ gulp sass
exports.watch = watchFiles; // $ gulp watch
// exports.build = series(buildStylesAdmin, buildStylesClient); // $ gulp build
exports.prod = parallel(cssMin, JavaScriptMin); // $ gulp prod
