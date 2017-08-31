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

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace CoreMVCAngular.api
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        private SignInManager<ApplicationUser> _signInManager;
        private IUnitOfWork _uow;
        private IRepository<Dashboard> _repo;


        public DashboardController(SignInManager<ApplicationUser> signInManager, IUnitOfWork uow)
        {
            _signInManager = signInManager;
            _uow = uow;
            _repo = new Repository<Dashboard>(uow.Db);
            //_httpClient = httpClient;
        }

        /// <summary>
        /// Authenticate a user for provided username and password
        /// </summary>
        /// <param name="userName"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetAll")]
        public IEnumerable GetAll()
        //public async Task<bool> Authenticate([FromBody]LogInModel logInModel)
        {
            return _repo.GetAll();
        }
    }
}
