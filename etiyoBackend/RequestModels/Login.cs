using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace etiyoBackend.RequestModels
{
    public class Login
    {
        [Required]
        public string kullanici_adi { get; set; }
        [Required]
        public string sifre { get; set; }
    }
}