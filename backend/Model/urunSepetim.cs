using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class urunSepetim
    {
        public int id { get; set; }
        public int urun_id { get; set; }
        public string urun_kodu { get; set; }
        public int musteri_id { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
