using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreMVCAngular.api
{
    [Route("api/[controller]")]
    public class AuthenticateController : Controller
    {
        /// <summary>
        /// Authenticate a user for provided username and password
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Fetch")]
        public string Authenticate(string userName, string password)
        {
            return "login success";
        }

    }
}
