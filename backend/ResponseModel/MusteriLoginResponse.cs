using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ResponseModel
{
    public class MusteriLoginResponse
    {
        public string adi { get; set; }
        public string soyadi { get; set; }
        public int firma_id { get; set; }
        public string kullanici_adi { get; set; }
        public string mail { get; set; }
        public string telefon { get; set; }
        public string address { get; set; }
        public string token { get; set; }
    }
}
