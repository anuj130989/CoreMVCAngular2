﻿namespace WebCoreApp.ApiResponse
{
    using System.Collections.Generic;

    public class ErrorStateResponse
    {
        public string Message { get; set; }
        public IDictionary<string, string[]> ModelState { get; set; }
    }
}