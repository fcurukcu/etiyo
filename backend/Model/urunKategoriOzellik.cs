using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Model
{
    public class urunKategoriOzellik
    {
        public int id { get; set; }
        public int kategori_id { get; set; }
        public int ozellik_id { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
