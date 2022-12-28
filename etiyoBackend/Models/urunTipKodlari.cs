using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace etiyoBackend.Model
{
    public class urunTipKodlari
    {
        public int id { get; set; }
        public string urun_tip_kodu { get; set; }
        public int urun_id { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
