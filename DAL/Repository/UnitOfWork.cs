using DAL.interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        //private TransactionScope _transaction;
        private readonly ERPContext _db;


        public UnitOfWork(ERPContext db)
        {
            _db = db;
        }

        public void Dispose()
        {

        }

        public void StartTransaction()
        {

            //_transaction = new TransactionScope();
        }

        public void Commit()
        {
            _db.SaveChanges();
           // _transaction.Complete();
        }

        public DbContext Db
        {
            get { return _db; }
        }

    }
}
