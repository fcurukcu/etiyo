using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.RequestModel
{
    public class FirmaSettingsRequest
    {
        public int id { get; set; }
        public string kullanici_adi { get; set; }
        public string sifre { get; set; }
        public string adi { get; set; }
        public string soyadi { get; set; }
        public string adres { get; set; }
        public string firma_adi { get; set; }
        public string firma_mail { get; set; }
        public string firma_tel1 { get; set; }
        public string firma_tel2 { get; set; }
        public string firma_adres { get; set; }
        public string firma_iban { get; set; }
        public string firma_domain { get; set; }
        public string firma_logo { get; set; }
        public string firma_slider { get; set; }
      
       
    }
}
