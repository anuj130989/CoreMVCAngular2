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
var http_1 = require("@angular/http");
var index_1 = require("../constants/index");
var index_2 = require("./index");
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http, injector) {
        var _this = this;
        this.http = http;
        setTimeout(function () {
            _this.header = injector.get(index_2.APIHeadersService);
            console.log(_this.header);
        });
    }
    AuthenticationService.prototype.login = function (loginModel, callback) {
        var headers = new http_1.Headers({ 'content-type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post(index_1.API_Urls.AuthenticationAPI, JSON.stringify(loginModel), options).map(function (res) { return res.json(); }).subscribe(function (value) {
            callback(value);
        }, function (err) { return console.log(err); }, function () { return console.log("complete"); });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_1.Injector])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
