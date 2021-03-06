﻿/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'lib-npm/@angular/core/bundles/core.umd.js',
            '@angular/common': 'lib-npm/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'lib-npm/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'lib-npm/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib-npm/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib-npm/@angular/http/bundles/http.umd.js',
            '@angular/http/testing': 'lib-npm/@angular/http/bundles/http-testing.umd.js',
            '@angular/router': 'lib-npm/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'lib-npm/@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'lib-npm/rxjs',
            '@ng-bootstrap/ng-bootstrap': 'lib-npm/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './test.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular2-modal': { defaultExtension: 'js' },
            'angular2-modal/plugins/bootstrap': { defaultExtension: 'js' }
        }


    });
})(this);
