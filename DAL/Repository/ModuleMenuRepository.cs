using DAL.DbModels;
using DAL.interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace DAL.Repository
{
    public class ModuleMenuRepository : Repository<ModuleMenu>, IModuleMenu
    {
        public ModuleMenuRepository(DbContext _db) : base(_db)
        {
        }

        public IEnumerable GetModuleHierarchy()
        {
            return entities.ToList();
        }
    }
}
