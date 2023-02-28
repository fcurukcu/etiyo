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
        [Route("[controller]/liste/{firmid}")]
        public Response liste(int firmid)
        {
            try
            {
                List<urunAltKategoriResponse> res = _context.urunKategorisi.Select(x => new urunAltKategoriResponse
                {
                    adi = x.adi,
                    parent_id = x.parent_id,
                    ekleme_tarihi = x.ekleme_tarihi,
                    firm_id = x.firm_id,
                    id = x.id,
                    oneKategori = _context.urunKategorisi.Select(k => new oneKategori
                    {
                        adi = k.adi,
                        ekleme_tarihi = k.ekleme_tarihi,
                        firm_id = k.firm_id,
                        parent_id = k.parent_id,
                        id = k.id,
                        twoKategori = _context.urunKategorisi.Select(m => new urunKategorisi
                        {
                            adi = m.adi,
                            ekleme_tarihi = m.ekleme_tarihi,
                            firm_id = m.firm_id,
                            id = m.id,
                            parent_id = m.parent_id
                        }).Where(m => m.parent_id == k.id).ToList()
                    }).Where(k => k.parent_id == x.id).ToList()
                }).Where(k => k.parent_id == 0 && k.firm_id == firmid).ToList();
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
                urunKategorisi kat = _context.urunKategorisi.Where(x => x.adi == req.adi && x.parent_id == req.parent_id && x.firm_id==req.firm_id).FirstOrDefault();

                if (kat == null)
                {
                    urunKategorisi kat1 = new urunKategorisi
                    {
                        adi = req.adi,
                        parent_id = req.parent_id,
                        firm_id=req.firm_id,
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
            urunKategorisi kat = _context.urunKategorisi.Where(x => x.id == id).FirstOrDefault();

            if (kat != null)
            {
                _context.Remove(kat);
                _context.SaveChanges();
                return new Response() { status = 200, response = "Silme işlemi başarılı" };
            }
            return new Response() { status = 500, response = "Bu ürün kategorisi bulunamadı" };
            //try
            //{
               
            //}
            //catch (Exception)
            //{
            //    return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            //}
        }
    }
}
