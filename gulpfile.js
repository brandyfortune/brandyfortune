"use strict";

var gulp                = require('gulp');
var browserSync         = require('browser-sync').create();
var nodemon 			= require('gulp-nodemon');


gulp.task('hello', () => console.log('Waaazzuuuuuppp'));

gulp.task('browserSync', function()
{	
	browserSync.init({
        proxy: "http://localhost:9037"
    });
    
   gulp.watch(["src/client/*.js",
    			"src/client/*.html",
    			"src/client/*.css",
    			"src/client/**/*.js",
    			"src/client/**/*.html",
    			"src/client/**/*.css"])
   .on('change', browserSync.reload);
});

gulp.task('start', function () {
  nodemon({
    script: 'src/static/server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

// git-r-done
gulp.task('default', [
	'start', 'browserSync'
]);
