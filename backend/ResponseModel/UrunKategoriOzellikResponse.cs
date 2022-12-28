using backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.ResponseModel
{
    public class UrunKategoriOzellikResponse
    {
        public urunKategoriOzellik urunKatOz { get; set; }
        public string ozellik_adi { get; set; }
        public string kategori_adi { get; set; }

    }
}
