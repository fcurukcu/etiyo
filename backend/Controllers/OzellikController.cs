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
    public class OzellikController
    {
        private DataContext _context;
        public OzellikController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("[controller]/liste")]
        public Response liste()
        {
            try
            {
                List<ozellik> res = _context.ozellik.ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/ekle")]
        public Response ekle(ozellik req)
        {
            try
            {
                ozellik lec = _context.ozellik.Where(x => x.adi == req.adi && x.parent_id == req.parent_id).FirstOrDefault();

                if (lec == null)
                {
                    ozellik oz = new ozellik
                    {
                        adi=req.adi,
                        parent_id=req.parent_id,
                        ekleme_tarihi = DateTime.Now
                    };
                    _context.ozellik.Add(oz);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu özellik daha önceden eklenmiş" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/guncelle")]
        public Response guncelle(ozellik req)
        {
            try
            {
                ozellik oz = _context.ozellik.Where(x => x.id == req.id).FirstOrDefault();

                if (oz != null)
                {
                    oz.parent_id = req.parent_id;
                    oz.adi = req.adi;
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Güncelleme işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu özellik bulunamadı" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpGet]
        [Route("[controller]/sil/{id}")]
        public Response sil(int id)
        {
            try
            {
                ozellik oz = _context.ozellik.Where(x => x.id == id).FirstOrDefault();

                if (oz != null)
                {
                    _context.Remove(oz);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Silme işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu özellik bulunamadı" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
    }
}
