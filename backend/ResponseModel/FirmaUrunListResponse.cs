﻿using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ResponseModel
{
    public class FirmaUrunListResponse
    {
        public firmaUrunleri firmaUrun { get; set; }
        public string kategori_adi { get; set; }
        public string firma_adi { get; set; }
        public string urun_tip_kodu { get; set; }
    }
}