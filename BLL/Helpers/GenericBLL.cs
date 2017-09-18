using BLL.Interfaces;
using DAL;
using DAL.DbModels;
using DAL.interfaces;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace BLL.Helpers
{
    /// <summary>
    /// Contains Generic business layer implementation  
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class GenericBLL<T> : IGenericBLL<T> where T : class
    {

        private IUnitOfWork _uow;
        protected IRepository<T> _repo;

        public GenericBLL(IUnitOfWork uow)
        {
            _uow = uow;
            _repo = new Repository<T>(uow.Db);
        }

        /// <summary>
        /// Returns the list of all items of T
        /// </summary>
        /// <returns></returns>
        public IEnumerable GetAll()
        {
            return _repo.GetAll();
        }
    }
}
