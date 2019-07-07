using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSideProject.Models
{
    public class NewActivityModel
    {

        public int MaximumAttenders { get; set; }

        public string ActivityName { get; set; }

        public bool IsActivated { get; set; }

        public string Description { get; set; }
        public string CreatorName { get; set; }
        public int CreatorId { get; set; }

        public Student User { get; set; }

    }
}
