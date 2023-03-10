using backend.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using backend.RequestModel;
using backend.Model;
using backend.ResponseModel;
using backend.FunctionModel;
using System.Collections.Generic;
using System.IO;

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
        [Route("[controller]/liste/{firmid}")]
        public Response liste(int firmid)
        {
            try
            {
                List<FirmaUrunListResponse> res = _context.firmaUrunleri.Where(x=>x.firma_id==firmid).Select(x => new FirmaUrunListResponse
                {
                    firmaUrun = x,
                  
                    kategori_adi = _context.urunKategorisi.Where(m => m.id == x.kategori_id).FirstOrDefault().adi,
                    firma_adi = _context.firmaKullanicisi.Where(m => m.id == x.firma_id).FirstOrDefault().firma_adi,
                    urun_tip_kodu = _context.urunTipKodlari.Where(m => m.id == x.urun_tip_id).FirstOrDefault().urun_tip_kodu,
                   oneKategori = _context.urunKategorisi.Where(m => m.id == x.kategori_id).FirstOrDefault().parent_id!=0?
                    _context.urunKategorisi.Where(m => m.id == _context.urunKategorisi.Where(m => m.id == x.kategori_id).FirstOrDefault().parent_id).FirstOrDefault().id:0,
                    mainKategori = _context.urunKategorisi.Where(m => m.id == x.kategori_id).FirstOrDefault().parent_id != 0 ?
                    _context.urunKategorisi.Where(m => m.id == _context.urunKategorisi.Where(m => m.id == x.kategori_id).FirstOrDefault().parent_id).FirstOrDefault().parent_id : 0

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
        public Response ekle([FromForm] FirmaUrunlerRequest req)
        {
            try
            {
                urunTipKodlari utipKod = _context.urunTipKodlari.Where(x => x.urun_tip_kodu == req.urun_tip_kodu).FirstOrDefault();
                firmaUrunleri kat = _context.firmaUrunleri.Where(x => x.urun_kodu == req.urun_kodu).FirstOrDefault();
                if (kat == null)
                {
                    if (utipKod == null)
                    {
                        urunTipKodlari ut = new urunTipKodlari();
                        ut.urun_tip_kodu = req.urun_tip_kodu;
                        ut.ekleme_tarihi = DateTime.Now;
                        _context.urunTipKodlari.Add(ut);
                        _context.SaveChanges();
                        req.urun_tip_id = ut.id;
                    }
                    firmaUrunleri kat1 = new firmaUrunleri();
                    kat1.firma_id = req.firma_id;
                    kat1.kategori_id = req.kategori_id;
                    kat1.adi = req.adi;
                    kat1.urun_kodu = req.urun_kodu;
                    kat1.ekleme_tarihi = DateTime.Now;
                    kat1.fiyat = req.fiyat;
                    kat1.urun_aciklama = req.urun_aciklama;
                    kat1.urun_tip_id = req.urun_tip_id;
                    var extension = Path.GetExtension(req.resim.FileName);
                    var newimagename = Guid.NewGuid() + extension;
                    var location = Path.Combine(Directory.GetCurrentDirectory(), "images/Products", newimagename);
                    var stream = new FileStream(location, FileMode.Create);
                    req.resim.CopyTo(stream);
                    kat1.resim = newimagename;
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
                    urunResim urun = new urunResim();
                    if (req.resim != null)
                    {
                        var extension2 = Path.GetExtension(req.resim.FileName);
                        var newimagename2 = Guid.NewGuid() + extension2;
                        var location2 = Path.Combine(Directory.GetCurrentDirectory(), "images/Products", newimagename2);
                        var stream2 = new FileStream(location2, FileMode.Create);
                        req.resim.CopyTo(stream2);
                        urun.resim = newimagename;
                    }
                    urun.ekleme_tarihi = DateTime.Now;
                   urun.urun_tip_id = req.urun_tip_id;
                    _context.urunResim.Add(urun);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu ürün daha önceden eklenmiş" };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
       

        [HttpPost]
        [Route("[controller]/guncelle")]
        public Response guncelle([FromForm] FirmaUrunlerRequest req)
        {
            try
            {
                firmaKullanicisi firma = _context.firmaKullanicisi.Where(x => x.id == req.firma_id).FirstOrDefault();
                firmaUrunleri kat = _context.firmaUrunleri.Where(x => x.id == req.id).FirstOrDefault();
               
                if (firma !=null && kat != null)
                {
                    urunTipKodlari utipKod = _context.urunTipKodlari.Where(x => x.urun_tip_kodu == req.urun_tip_kodu).FirstOrDefault();
                    if (utipKod == null)
                    {
                        urunTipKodlari ut = new urunTipKodlari();
                        ut.urun_tip_kodu = req.urun_tip_kodu;
                        ut.ekleme_tarihi = DateTime.Now;
                        _context.urunTipKodlari.Add(ut);
                        _context.SaveChanges();
                        req.urun_tip_id = ut.id;
                    }

                    kat.fiyat = req.fiyat;
                    kat.adi = req.adi;
                    kat.kategori_id = req.kategori_id;
                    kat.urun_aciklama = req.urun_aciklama;
                    kat.urun_kodu = req.urun_kodu;
                    kat.urun_tip_id = req.urun_tip_id;
                    if (req.resim != null)
                    {
                        var extension = Path.GetExtension(req.resim.FileName);
                        var newimagename = Guid.NewGuid() + extension;
                        var location = Path.Combine(Directory.GetCurrentDirectory(), "images/Products", newimagename);
                        var stream = new FileStream(location, FileMode.Create);
                        req.resim.CopyTo(stream);
                        kat.resim = newimagename;
                    }
                    _context.SaveChanges();
                return new Response() { status = 200, response = "Kayıt işlemi başarılı" };

                List<firmaUrunOzellikleri> delOzellik = _context.firmaUrunOzellikleri.Where(x => x.urun_id == req.id).ToList();
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
