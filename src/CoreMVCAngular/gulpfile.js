/// <binding Clean='copy-all, copy-es6-shim' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";

var gulp = require("gulp");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var root_path = { webroot: "./wwwroot/" };

//library source
root_path.nmSrc = "./node_modules/";

//library destination
root_path.package_lib = root_path.webroot + "lib-npm/";

gulp.task("copy-systemjs", function () {
    return gulp.src(root_path.nmSrc + '/systemjs/dist/**/*.*', {
        base: root_path.nmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/systemjs/'));
});

gulp.task("copy-angular2", function () {
    return gulp.src(root_path.nmSrc + '/@angular/**/*.js', {
        base: root_path.nmSrc + '/@angular/**'
    }).pipe(gulp.dest(root_path.package_lib + '/@angular/*'));
});

gulp.task("copy-shim", function () {
    return gulp.src(root_path.nmSrc + '/core-js/**/*.js', {
        base: root_path.nmSrc + '/core-js/**/'
    }).pipe(gulp.dest(root_path.package_lib + '/shim/*'));
});

gulp.task("copy-zone", function () {
    return gulp.src(root_path.nmSrc + '/zone.js/**/*.js', {
        base: root_path.nmSrc + '/zone.js/**/'
    }).pipe(gulp.dest(root_path.package_lib + '/zone/*'));
});

gulp.task("copy-rxjs", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/**/*.*', {
        base: root_path.nmSrc + '/rxjs/**/'
    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/*'));
});

gulp.task("copy-all", ["copy-rxjs", 'copy-angular2', 'copy-systemjs', 'copy-shim', 'copy-zone']);