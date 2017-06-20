"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./loginComponent/index');
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: '', component: index_1.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
