using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.RequestModel
{
    public class FirmaWebSiteStatusRequest
    {
        public int firm_id { get; set; }
        public bool site_aktif_pasif { get; set; }
    }
}
