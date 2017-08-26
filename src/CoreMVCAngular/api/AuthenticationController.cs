using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using CoreMVCAngular.Data;
using CoreMVCAngular.Models;
using System.Net.Http;
using WebCoreApp.ApiHelper.Client;
using WebCoreApp.ApiResponse;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreMVCAngular.api
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        private SignInManager<ApplicationUser> _signInManager;        

        public AuthenticationController(SignInManager<ApplicationUser> signInManager)
        {
            _signInManager = signInManager;
            //_httpClient = httpClient;
        }

        /// <summary>
        /// Authenticate a user for provided username and password
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Authenticate1")]
        public bool Authenticate1()
        //public async Task<bool> Authenticate([FromBody]LogInModel logInModel)
        {
            return true;
        }


        /// <summary>
        /// Authenticate a user for provided username and password
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Authenticate")]
        public async Task<TokenResponse> Authenticate([FromBody]LogInModel logInModel)
        //public async Task<bool> Authenticate([FromBody]LogInModel logInModel)
        {
            var keyValueParams = new KeyValuePair<string, string>[3]
            {
                new KeyValuePair<string, string>("grant_type","password"),
                new KeyValuePair<string, string>("username", logInModel.UserName),
                new KeyValuePair<string, string>("password", logInModel.Password)
            };

            var httpClient = new HttpClient();
            httpClient.BaseAddress = new Uri("http://" + Request.Host.ToString());
            var tokenResponse = await httpClient.PostAsync(
                "api/token  ", new FormUrlEncodedContent(keyValueParams));
            var test = await ClientBase.CreateJsonResponse<TokenResponse>(tokenResponse);
            if (!tokenResponse.IsSuccessStatusCode)
            {
                var errorContent = await ClientBase.DecodeContent<dynamic>(tokenResponse);
                test.ErrorState = new ErrorStateResponse
                {
                    ModelState = new Dictionary<string, string[]>
                    {
                        { Convert.ToString(errorContent["error"]), new string[] {errorContent["error_description"]}}
                    }
                };

                    
                return test;
            }

            var tokenData = await ClientBase.DecodeContent<dynamic>(tokenResponse);
            test.Data = tokenData["access_token"];
            return test;
        }

    }
}
