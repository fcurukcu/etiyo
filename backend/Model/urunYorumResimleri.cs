using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class urunYorumResimleri
    {
        public int id { get; set; }
        public int yorum_id { get; set; }
        public string resim { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
