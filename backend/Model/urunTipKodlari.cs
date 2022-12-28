using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class urunTipKodlari
    {
        public int id { get; set; }
        public string urun_tip_kodu { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
