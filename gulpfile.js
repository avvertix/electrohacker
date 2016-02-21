var gulp = require('gulp'),
	less = require('gulp-less'),
	concat = require('gulp-concat');
	// minifyCSS = require('gulp-minify-css');

gulp.task('less', function(){
    return gulp.src('less/style.less')
        .pipe(less())
		// .pipe(minifyCSS())
        .pipe(gulp.dest('./css'));
});


//gulp.task('scripts', function() {
//    gulp.src([
//			'./bower_components/jquery/dist/jquery.min.js', 
//			'./bower_components/d3/d3.min.js',
//			'./bower_components/metrics-graphics/dist/metricsgraphics.min.js', 
//			'js/**/*.js' 
//		])
//        .pipe(concat('all.js'))
//        .pipe(gulp.dest('./build/js'));
//});


gulp.task('default', ['less']);

gulp.task('watch', function() {
//  gulp.watch(['bower_components/**/*.js', 'js/**/*.js' ], ['scripts']);
  gulp.watch('less/**/*.less', ['less']);
});