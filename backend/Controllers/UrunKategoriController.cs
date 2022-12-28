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
    public class UrunKategoriController
    {
        private DataContext _context;
        public UrunKategoriController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("[controller]/liste")]
        public Response liste()
        {
            try
            {
                List<urunKategorisi> res = _context.urunKategorisi.ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/ekle")]
        public Response ekle(urunKategorisi req)
        {
            try
            {
                urunKategorisi kat = _context.urunKategorisi.Where(x => x.adi == req.adi && x.parent_id == req.parent_id).FirstOrDefault();

                if (kat == null)
                {
                    urunKategorisi kat1 = new urunKategorisi
                    {
                        adi = req.adi,
                        parent_id = req.parent_id,
                        ekleme_tarihi = DateTime.Now
                    };
                    _context.urunKategorisi.Add(kat1);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün kategorisi daha önceden eklenmiş" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/guncelle")]
        public Response guncelle(urunKategorisi req)
        {
            try
            {
                urunKategorisi kat = _context.urunKategorisi.Where(x => x.id == req.id).FirstOrDefault();
                if (kat != null)
                {
                    kat.parent_id = req.parent_id;
                    kat.adi = req.adi;
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Güncelleme işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün kategorisi bulunamadı" };
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
                urunKategorisi kat = _context.urunKategorisi.Where(x => x.id == id).FirstOrDefault();

                if (kat != null)
                {
                    _context.Remove(kat);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Silme işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün kategorisi bulunamadı" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
    }
}
