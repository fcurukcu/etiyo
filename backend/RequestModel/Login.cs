using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backend.RequestModel
{
    public class Login
    {
        [Required]
        public string kullanici_adi { get; set; }
        [Required]
        public string sifre { get; set; }
        [Required]
        public string firma_adi { get; set; }
        [Required]
        public string firma_mail { get; set; }
        [Required]
        public string firma_tel1 { get; set; }
    }

    public class AccessToken
    {
        //public string token { get; set; }
        public int id { get; set; }
    }
}
