using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ResponseModel
{
    public class urunAltKategoriResponse
    {
        public int id { get; set; }
        public int parent_id { get; set; }
        public string adi { get; set; }
        public DateTime ekleme_tarihi { get; set; }
        public int firm_id { get; set; }
        public List<oneKategori> ?oneKategori { get; set; }
    }

    public class oneKategori
    {
        public int ?id { get; set; }
        public int ?parent_id { get; set; }
        public string ?adi { get; set; }
        public DateTime ?ekleme_tarihi { get; set; }
        public int ?firm_id { get; set; }
        public List<urunKategorisi>? twoKategori { get; set; }
    }
}
