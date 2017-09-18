using DAL.DbModels;
using Microsoft.EntityFrameworkCore;
using System;

namespace DAL
{
    public class ERPContext : DbContext
    {
        public ERPContext(DbContextOptions options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new ModuleMenuMap(modelBuilder.Entity<ModuleMenu>());
        }
    }
}
