using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace etiyoBackend.Model
{
    public class urunSiparis
    {
        public int id { get; set; }
        public int urun_id { get; set; }
        public string urun_kodu { get; set; }
        public string siparis_kodu { get; set; }
        public int musteri_id { get; set; }
        public byte onay_durumu { get; set; }
        public string kargo_kodu { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
