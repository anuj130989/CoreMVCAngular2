"use strict";
var API_Urls = (function () {
    function API_Urls() {
    }
    return API_Urls;
}());
API_Urls.AuthenticationAPI = "/api/Authentication/Authenticate";
API_Urls.AuthenticationAPI1 = "/api/Authentication/Authenticate1";
API_Urls.RegisterationAPI = "/api/Registration/Register";
exports.API_Urls = API_Urls;
var HeaderType = (function () {
    function HeaderType() {
    }
    return HeaderType;
}());
HeaderType.ContentType = "Content-Type";
HeaderType.FormUrlEncoded = "application/x-www-form-urlencoded";
HeaderType.ApplicationJson = "application/json";
exports.HeaderType = HeaderType;
