using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSideProject.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Class { get; set; }
        public string Password { get; set; }
        //public int[] Activities { get; set; }

    }
}
