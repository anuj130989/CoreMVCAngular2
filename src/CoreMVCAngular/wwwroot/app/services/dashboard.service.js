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
var DashboardService = (function () {
    function DashboardService(http, injector) {
        this.http = http;
        this.header = injector.get(index_2.APIHeadersService);
        this.tokenService = injector.get(index_2.TokenProviderService);
    }
    DashboardService.prototype.getAll = function (callback) {
        var accessToken = this.tokenService.getToken();
        var headers = new http_1.Headers({ 'content-type': 'application/json', 'authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.get(index_1.API_Urls.DashboardGetAllAPI, options).map(function (res) { return res.json(); }).subscribe(function (value) { return callback(value); }, function (err) { return console.log(err); }, function () { return console.log("complete"); });
    };
    return DashboardService;
}());
DashboardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_1.Injector])
], DashboardService);
exports.DashboardService = DashboardService;
