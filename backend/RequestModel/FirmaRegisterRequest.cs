using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.RequestModel
{
    public class FirmaRegisterRequest
    {
        public string kullanici_adi { get; set; }
        public string sifre { get; set; }
        public string firma_mail { get; set; }
        public string firma_adi { get; set; }
        public string firma_tel1 { get; set; }
    }
}
