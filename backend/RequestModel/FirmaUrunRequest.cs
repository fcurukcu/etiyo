using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.RequestModel
{
    public class FirmaUrunRequest
    {
        public firmaUrunleri firmaUrun { get; set; }
        public List<int> ozellikler { get; set; }
        public string urun_tip_kodu { get; set; }
    }
}
