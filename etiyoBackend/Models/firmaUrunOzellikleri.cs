using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace etiyoBackend.Model
{
    public class firmaUrunOzellikleri
    {
        public int id { get; set; }
        public int urun_tip_id { get; set; }
        public int ozellik_id { get; set; }
        public DateTime ekleme_tarihi { get; set; }
    }
}
