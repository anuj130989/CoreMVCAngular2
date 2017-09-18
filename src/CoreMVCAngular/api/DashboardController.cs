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
using DAL.interfaces;
using DAL.DbModels;
using DAL;
using System.Collections;
using Microsoft.AspNetCore.Authorization;
using BLL.Interfaces;
using BLL.Helpers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreMVCAngular.api
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        private SignInManager<ApplicationUser> _signInManager;
        private IUnitOfWork _uow;
        private BLL.Interfaces.IModuleMenu _moduleMenu;


        public DashboardController(IUnitOfWork uow)
        {
            _uow = uow;
            _moduleMenu = new ModuleMenuHelper(_uow);
        }

        /// <summary>
        /// Get all modules
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet]
        [Authorize]
        [Route("GetAll")]
        public IEnumerable GetAll()
        //public async Task<bool> Authenticate([FromBody]LogInModel logInModel)
        {
            return _moduleMenu.GetModuleHierarchy();
        }
    }
}
