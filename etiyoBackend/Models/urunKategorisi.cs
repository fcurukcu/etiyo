using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace etiyoBackend.Model
{
    public class urunKategorisi
    {
        public int id { get; set; }
        public int parent_id { get; set; }
        public string adi { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
