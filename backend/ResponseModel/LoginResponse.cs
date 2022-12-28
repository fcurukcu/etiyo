using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ResponseModel
{
    public class LoginResponse
    {
        public int id { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public string firma_adi { get; set; }
        public string firma_mail { get; set; }
        public string token { get; set; }
    }
}
