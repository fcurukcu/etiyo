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
    public class UrunKategoriOzellikController
    {
        private DataContext _context;
        public UrunKategoriOzellikController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("[controller]/liste")]
        public Response liste()
        {
            try
            {
                List<UrunKategoriOzellikResponse> res = _context.urunKategoriOzellik.Select(x=>new UrunKategoriOzellikResponse {
                    urunKatOz = x,
                    kategori_adi= _context.urunKategorisi.Where(m=>m.id==x.kategori_id).FirstOrDefault().adi,
                    ozellik_adi= _context.ozellik.Where(m => m.id == x.ozellik_id).FirstOrDefault().adi,

                }).ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/ekle")]
        public Response ekle(urunKategoriOzellik req)
        {
            try
            {
                urunKategoriOzellik kat = _context.urunKategoriOzellik.Where(x => x.ozellik_id == req.ozellik_id && x.kategori_id == req.kategori_id).FirstOrDefault();

                if (kat == null)
                {
                    urunKategoriOzellik kat1 = new urunKategoriOzellik
                    {
                        kategori_id = req.kategori_id,
                        ozellik_id = req.ozellik_id,
                        ekleme_tarihi = DateTime.Now
                    };
                    _context.urunKategoriOzellik.Add(kat1);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün kategori özelliği daha önceden eklenmiş" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }

        [HttpPost]
        [Route("[controller]/guncelle")]
        public Response guncelle(urunKategoriOzellik req)
        {
            try
            {
                urunKategoriOzellik kat = _context.urunKategoriOzellik.Where(x => x.id == req.id).FirstOrDefault();
                urunKategoriOzellik isOz = _context.urunKategoriOzellik.Where(x => x.id != req.id && x.kategori_id==req.kategori_id && x.ozellik_id== req.ozellik_id).FirstOrDefault();
                if (kat != null && isOz == null)
                {
                    kat.kategori_id = req.kategori_id;
                    kat.ozellik_id = req.ozellik_id;
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Güncelleme işlemi başarılı" };
                }
                if(isOz != null)
                {
                    return new Response() { status = 500, response = "Bu ürün kategori özelliği daha önceden eklenmiş" };
                }
                return new Response() { status = 500, response = "Bu ürün kategori özelliği bulunamadı" };
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
                urunKategoriOzellik kat = _context.urunKategoriOzellik.Where(x => x.id == id).FirstOrDefault();

                if (kat != null)
                {
                    _context.Remove(kat);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Silme işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün kategori özelliği bulunamadı" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
    }
}
