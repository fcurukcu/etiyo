using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ResponseModel
{
    public class SiparisResponse
    {
        public urunSiparis siparis { get; set; }
        public string urunNo { get; set; }
        public string urunAdi { get; set; }


    }
}
