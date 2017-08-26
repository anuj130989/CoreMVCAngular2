using Microsoft.AspNetCore.Mvc;
using CoreMVCAngular.Models;
using Microsoft.AspNetCore.Identity;
using CoreMVCAngular.Data;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreMVCAngular.api
{
    [Route("api/Registration")]
    public class RegistrationController : Controller
    {
        /// <summary>
        /// Private variable of Identity framework to deal with user registration and other features
        /// </summary>
        private UserManager<ApplicationUser> _userManager;

        /// <summary>
        /// Registration controller constructor
        /// </summary>
        /// <param name="userManager">Identity framework: UserManager is provided by .NET dependency injection</param>
        public RegistrationController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        /// <summary>
        /// Register a new user for provided details
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("Register")]
        public async Task<JsonResult> Register([FromBody]RegisterModel registerModel)
        {
            var register = await _userManager.CreateAsync(new ApplicationUser
            {
                UserName = registerModel.UserName,
                Email = registerModel.Email,
                PhoneNumber = registerModel.PhoneNumber
            }, registerModel.Password);
            if (register.Succeeded)
            {
                return Json(new { success = register.Succeeded });
            }
            return Json(new { success = register.Succeeded, error = register.Errors });
        }
    }
}
