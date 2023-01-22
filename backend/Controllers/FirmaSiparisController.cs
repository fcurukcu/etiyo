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

                    urunNo = _context.firmaUrunleri.Where(m=>m.urun_kodu==x.urun_kodu).FirstOrDefault().urun_kodu,
               
                    urunAdi=_context.firmaUrunleri.Where(m=>m.id==x.urun_id).FirstOrDefault().adi

                }).ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/siparisdurum")]
        public Response siparisdurum(FirmaSiparis req)
        {
            try
            {
                urunSiparis siparis = _context.urunSiparis
                     .Where(x => x.firma_id == req.firma_id && x.id==req.id).FirstOrDefault();
                if (siparis != null)
                {
                    siparis.onay_durumu = req.onay_durumu;
                    _context.SaveChanges();
                }
                return new Response() { status = 200, response = "Güncelleme başarılı" };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/siparisKargoKoduEkleme")]
        public Response siparisKargoKoduEkleme(FirmaSiparis req)
        {
            try
            {
                urunSiparis siparis = _context.urunSiparis
                     .Where(x => x.firma_id == req.firma_id && x.id == req.id).FirstOrDefault();
                if (siparis != null)
                {
                    siparis.kargo_kodu = req.kargo_kodu;
                    _context.SaveChanges();
                }
                return new Response() { status = 200, response = "Güncelleme başarılı" };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }


    }

}
