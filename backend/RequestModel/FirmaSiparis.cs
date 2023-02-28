using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.RequestModel
{
    public class FirmaSiparis
    {
        public int firma_id { get; set; }
        public int id { get; set; }
        public bool onay_durumu { get; set; }
        public string kargo_kodu { get; set; }
     
    }
}
