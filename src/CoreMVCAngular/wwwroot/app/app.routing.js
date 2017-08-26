"use strict";
var router_1 = require("@angular/router");
var index_1 = require("./loginComponent/index");
var index_2 = require("./registerComponent/index");
var index_3 = require("./dashboard/index");
var appRoutes = [
    { path: 'login', component: index_1.LoginComponent },
    { path: 'register', component: index_2.RegisterComponent },
    { path: 'dashboard', component: index_3.DashboardComponent },
    { path: '', component: index_1.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
