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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var index_1 = require("../constants/index");
var APIHeadersService = (function () {
    function APIHeadersService() {
        this.headers = new http_1.Headers();
    }
    APIHeadersService.prototype.setHeader = function (headerType) {
        switch (headerType) {
            case index_1.HeaderType.FormUrlEncoded:
                this.headers.append(index_1.HeaderType.ContentType, index_1.HeaderType.FormUrlEncoded);
            default:
                this.headers.append(index_1.HeaderType.ContentType, index_1.HeaderType.ApplicationJson);
        }
    };
    APIHeadersService.prototype.getHeader = function (headerType) {
        this.setHeader(headerType);
        return this.headers;
    };
    return APIHeadersService;
}());
APIHeadersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], APIHeadersService);
exports.APIHeadersService = APIHeadersService;
