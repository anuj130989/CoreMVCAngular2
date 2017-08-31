using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DAL.interfaces
{
    public interface IRepository<T> where T : class
    {
        IEnumerable GetAll();
        IEnumerable Find(Expression predicate);
        T Get(object Id);
        void Add(T entity);
        void AddRange(IEnumerable entities);
        void Update(T entity);
        void Remove(object Id);
        void Remove(T entity);
        void RemoveRange(IEnumerable entities);
    }
}
