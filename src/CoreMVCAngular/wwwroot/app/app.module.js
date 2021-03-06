"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var index_1 = require("./modalComponent/index");
var index_2 = require("./services/index");
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
        imports: [platform_browser_1.BrowserModule,
            ng_bootstrap_1.NgbModule.forRoot(),
            forms_1.FormsModule, app_routing_1.routing, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, dashboard_component_1.DashboardComponent, index_1.NgbdModalContent],
        providers: [index_2.AuthenticationService, index_2.APIHeadersService, http_1.BaseRequestOptions, index_2.RegistrationService, index_2.DashboardService, index_2.TokenProviderService],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [index_1.NgbdModalContent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
