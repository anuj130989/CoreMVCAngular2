using DAL.DbModels;
using DAL.interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Linq;
using System.Linq.Expressions;

namespace DAL
{


    // implementation
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected readonly DbContext db;
        protected DbSet<TEntity> entities;
        public Repository(DbContext _db)
        {
            db = _db;
            entities = db.Set<TEntity>();
        }
        public IEnumerable GetAll()
        {
            return entities.ToList();
        }
        public IEnumerable Find(Expression predicate)
        {
            return null;
        }
        public TEntity Get(object Id)
        {
            return entities.Find(Id);
        }
        public void Add(TEntity entity)
        {
            entities.Add(entity);
        }
        public void AddRange(IEnumerable entities)
        {
            //entities.AddRange(entities);
        }
        public void Remove(TEntity entity)
        {
            entities.Remove(entity);
        }
        public void RemoveRange(IEnumerable entities)
        {
            //entities.RemoveRange(entities);
        }
        public void Remove(object Id)
        {
            TEntity entity = entities.Find(Id);
            this.Remove(entity);
        }
        public void Update(TEntity entity)
        {
            db.Entry(entity).State = EntityState.Modified;
        }
    }
}
