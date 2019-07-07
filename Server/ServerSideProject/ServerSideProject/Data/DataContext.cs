using Microsoft.EntityFrameworkCore;
using ServerSideProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSideProject.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options): base(options)
        {

        }

        public DbSet<Student> Students { get; set; }

        public DbSet<Activity> Activities { get; set; }
    }
}
