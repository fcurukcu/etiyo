using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class urunResim
    {
        public int id { get; set; }
        public int urun_tip_id { get; set; }
        public string resim { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
