using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSideProject.Models
{
    public class Activity
    {
        [Key]
        public int Id { get; set; }

        public string CreatorName { get; set; }
        public int CreatorId { get; set; }

        public int MaximumAttenders { get; set;}
        public int Attenders { get; set; }

        public string ActivityName { get; set; }
        public string Description { get; set; }

        public bool IsActivated { get; set; }

    }
}
