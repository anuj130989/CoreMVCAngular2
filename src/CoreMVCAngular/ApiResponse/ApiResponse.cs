﻿namespace WebCoreApp.ApiResponse
{
    using System.Net;

    public abstract class ApiResponse
    {
        public bool StatusIsSuccessful { get; set; }
        public ErrorStateResponse ErrorState { get; set; }
        public HttpStatusCode ResponseCode { get; set; }
        public string ResponseResult { get; set; }
    }

    public abstract class ApiResponse<T> : ApiResponse
    {
        public T Data { get; set; }
    }

    public class TokenResponse : ApiResponse<string>
    {
    }
}