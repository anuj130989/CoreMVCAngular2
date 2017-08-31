using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.DbModels
{
    public class BaseEntity
    {
        [Key]
        public int Id
        {
            get;
            set;
        }       
    }

    public class Dashboard : BaseEntity
    {             
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Active { get; set; }
    }

    public class DashboardMap
    {
        public DashboardMap(EntityTypeBuilder<Dashboard> entityBuilder)
        {
            entityBuilder.HasKey(t => t.Id);
            entityBuilder.Property(t => t.Name).IsRequired();            
            entityBuilder.Property(t => t.Active).IsRequired();
        }
    }
}
