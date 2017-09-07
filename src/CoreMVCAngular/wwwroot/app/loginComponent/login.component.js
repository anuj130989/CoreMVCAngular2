"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var index_1 = require("../services/index");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(authenticationService, router, tokenService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.tokenService = tokenService;
        this.model = {};
    }
    LoginComponent.prototype.loginCallback = function (response) {
        if (response.statusIsSuccessful) {
            var tokenResponse = JSON.parse(response.responseResult);
            this.tokenService.setToken(tokenResponse.access_token);
            this.router.navigate(['/dashboard']);
        }
        else
            this.model.loginResponse = 'Invalid Credentials';
    };
    LoginComponent.prototype.login = function (loginForm) {
        this.authenticationService.login(this.model, this.loginCallback.bind(this));
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-comp',
        //moduleId: module.id,
        templateUrl: 'app/loginComponent/login.html',
    }),
    __metadata("design:paramtypes", [index_1.AuthenticationService, router_1.Router, index_1.TokenProviderService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
