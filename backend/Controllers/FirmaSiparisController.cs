using backend.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using backend.RequestModel;
using backend.Model;
using backend.ResponseModel;
using backend.FunctionModel;
using System.Collections.Generic;

namespace backend.Controllers
{
    public class FirmaSiparisController
    {
        private DataContext _context;
        public FirmaSiparisController(DataContext context)
        {
            _context = context;
        }



        [HttpGet]
        [Route("[controller]/siparislistesi/{firmid}")]
        public Response siparislistesi(int firmid)
        {

            try
            {
                List<SiparisResponse> res = _context.urunSiparis.Where(x=>x.firma_id==firmid).Select(x => new SiparisResponse
                {
                    siparis = x,

                    firma_adi = _context.firmaKullanicisi.Where(m => m.id == x.firma_id).FirstOrDefault().firma_adi,

                }).ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
    }
}
