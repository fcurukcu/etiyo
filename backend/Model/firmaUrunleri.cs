using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class firmaUrunleri
    {
        public int id { get; set; }
        public int firma_id { get; set; }
        public int kategori_id { get; set; }
        public string adi { get; set; }
        public string urun_kodu { get; set; }
        public int urun_tip_id { get; set; }
        public DateTime ekleme_tarihi { get; set; }
        public int fiyat { get; set; }
        public string urun_aciklama { get; set; }
        public string resim { get; set; }
    }
}
