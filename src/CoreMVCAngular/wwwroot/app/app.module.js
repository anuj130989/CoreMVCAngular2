"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var index_1 = require("./services/index");
var login_component_1 = require("./loginComponent/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var register_component_1 = require("./registerComponent/register.component");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, dashboard_component_1.DashboardComponent],
        providers: [index_1.AuthenticationService, index_1.APIHeadersService, http_1.BaseRequestOptions, index_1.RegistrationService, index_1.DashboardService, index_1.TokenProviderService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
