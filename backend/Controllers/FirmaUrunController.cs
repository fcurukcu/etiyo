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
    public class FirmaUrunController
    {
        private DataContext _context;
        public FirmaUrunController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("[controller]/liste")]
        public Response liste()
        {
            try
            {
                List<FirmaUrunListResponse> res = _context.firmaUrunleri.Select(x => new FirmaUrunListResponse
                {
                    firmaUrun = x,
                    kategori_adi = _context.urunKategorisi.Where(m => m.id == x.kategori_id).FirstOrDefault().adi,
                    firma_adi = _context.firmaKullanicisi.Where(m => m.id == x.firma_id).FirstOrDefault().firma_adi,
                    urun_tip_kodu = _context.urunTipKodlari.Where(m => m.id == x.urun_tip_id).FirstOrDefault().urun_tip_kodu
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
        public Response ekle([FromBody] FirmaUrunRequest req)
        {
            //try
            //{
            urunTipKodlari utipKod = _context.urunTipKodlari.Where(x => x.urun_tip_kodu == req.urun_tip_kodu).FirstOrDefault();
            firmaUrunleri kat = _context.firmaUrunleri.Where(x => x.urun_kodu == req.firmaUrun.urun_kodu).FirstOrDefault();


            if (kat == null)
            {
               
                if (utipKod == null)
                {
                    urunTipKodlari ut = new urunTipKodlari();
                    ut.urun_tip_kodu = req.urun_tip_kodu;
                    ut.ekleme_tarihi = DateTime.Now;
                    _context.urunTipKodlari.Add(ut);
                    _context.SaveChanges();
                    req.firmaUrun.urun_tip_id = ut.id;
                }
                firmaUrunleri kat1 = req.firmaUrun;
                kat1.ekleme_tarihi = DateTime.Now;
                _context.firmaUrunleri.Add(kat1);
                _context.SaveChanges();

                foreach (int i in req.ozellikler)
                {
                    firmaUrunOzellikleri fk = new firmaUrunOzellikleri();
                    fk.urun_id = kat1.id;
                    fk.ozellik_id = i;
                    fk.ekleme_tarihi = DateTime.Now;
                    _context.firmaUrunOzellikleri.Add(fk);
                    _context.SaveChanges();
                }

                return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
            }
            return new Response() { status = 500, response = "Bu ürün daha önceden eklenmiş" };
            //}
            //catch (Exception)
            //{
            //    return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            //}
        }

        [HttpPost]
        [Route("[controller]/guncelle")]
        public Response guncelle([FromBody] FirmaUrunRequest req)
        {
            try
            {
                firmaUrunleri kat = _context.firmaUrunleri.Where(x => x.id == req.firmaUrun.id).FirstOrDefault();
                firmaUrunleri isUrunCode = _context.firmaUrunleri.Where(x => x.id != req.firmaUrun.id && x.urun_kodu != req.firmaUrun.urun_kodu).FirstOrDefault();
                if (kat != null && isUrunCode == null)
                {
                    urunTipKodlari utipKod = _context.urunTipKodlari.Where(x => x.urun_tip_kodu == req.urun_tip_kodu).FirstOrDefault();
                    if (utipKod == null)
                    {
                        urunTipKodlari ut = new urunTipKodlari();
                        ut.urun_tip_kodu = req.urun_tip_kodu;
                        ut.ekleme_tarihi = DateTime.Now;
                        _context.urunTipKodlari.Add(ut);
                        _context.SaveChanges();
                        req.firmaUrun.urun_tip_id = ut.id;
                    }

                    kat.fiyat = req.firmaUrun.fiyat;
                    kat.adi = req.firmaUrun.adi;
                    kat.kategori_id = req.firmaUrun.kategori_id;
                    kat.urun_aciklama = req.firmaUrun.urun_aciklama;
                    kat.urun_kodu = req.firmaUrun.urun_kodu;
                    kat.urun_tip_id = req.firmaUrun.urun_tip_id;
                    _context.SaveChanges();

                    List<firmaUrunOzellikleri> delOzellik = _context.firmaUrunOzellikleri.Where(x => x.urun_id == req.firmaUrun.id).ToList();
                    foreach (firmaUrunOzellikleri i in delOzellik)
                    {
                        _context.firmaUrunOzellikleri.Remove(i);
                        _context.SaveChanges();
                    }
                    foreach (int i in req.ozellikler)
                    {
                        firmaUrunOzellikleri fk = new firmaUrunOzellikleri();
                        fk.urun_id = kat.id;
                        fk.ozellik_id = i;
                        fk.ekleme_tarihi = DateTime.Now;
                        _context.firmaUrunOzellikleri.Add(fk);
                        _context.SaveChanges();
                    }


                    return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün daha önceden eklenmiş" };
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
                firmaUrunleri kat = _context.firmaUrunleri.Where(x => x.id == id).FirstOrDefault();

                if (kat != null)
                {
                    _context.Remove(kat);
                    List<firmaUrunOzellikleri> delOzellik = _context.firmaUrunOzellikleri.Where(x => x.urun_id == id).ToList();
                    foreach (firmaUrunOzellikleri i in delOzellik)
                    {
                        _context.firmaUrunOzellikleri.Remove(i);
                    }
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Silme işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün bulunamadı" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
    }
}
