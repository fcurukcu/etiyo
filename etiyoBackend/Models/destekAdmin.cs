using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace etiyoBackend.Models
{
    public class destekAdmin
    {
        public int id { get; set; }
        public int firm_id { get; set; }
        public int admin_id { get; set; }
        public byte mesaj_type { get; set; }
        public string mesaj { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}