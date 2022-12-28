using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class urunSoruCevap
    {
        public int id { get; set; }
        public int urun_tip_id { get; set; }
        public int musteri_id { get; set; }
        public int firma_id { get; set; }
        public string musteri_soru { get; set; }
        public string firma_cevap { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
