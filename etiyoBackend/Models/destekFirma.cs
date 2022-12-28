using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace etiyoBackend.Model
{
    public class destekFirma
    {
        public int id { get; set; }
        public int firm_id { get; set; }
        public int musteri_id { get; set; }
        public byte mesaj_tipi { get; set; }
        public string mesaj { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
