using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class ozellik
    {
        public int id { get; set; }
        public int parent_id { get; set; }
        public string adi { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
