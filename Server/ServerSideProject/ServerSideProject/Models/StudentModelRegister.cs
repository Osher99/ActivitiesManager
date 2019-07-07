using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSideProject.Models
{
    public class StudentModelRegister
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Class { get; set; }
        public string Password { get; set; }
        //public List<Activity> RegisteredActivities { get; set; }
    }
}
