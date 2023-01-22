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
   
    public class FirmaController
    {
        private DataContext _context;
        public FirmaController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("[controller]/login")]
        public Response login([FromBody]Login login)
        {
            try
            {

                JwtFunctions sifre = new JwtFunctions();
            string sifre2 = sifre.Encrypt(sifre.Encrypt(login.sifre));
                firmaKullanicisi lec = _context.firmaKullanicisi
         .Where(x => x.kullanici_adi == login.kullanici_adi && x.sifre == sifre2).FirstOrDefault();

            if (lec != null)
            {
                string key = sifre.generateJwtToken(login);
                lec.token = key;
                _context.SaveChanges();
                LoginResponse response = new LoginResponse()
                {
                   id=lec.id,
                  adi = lec.adi,
                  firma_adi=lec.firma_adi,
                  firma_mail=lec.firma_mail,
                  soyadi=lec.soyadi,
                  token=lec.token,
                  firma_id=lec.id
                };

                return new Response() { status = 200, response = response };
            }
            return new Response() { status = 500, response = "Kullanıcı adı veya şifre yanlış" };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Hatayla karşılaşıldı" };
            }
        }

        
        [HttpPost]
        [Route("[controller]/getfirma")]
        public Response getFirma([FromBody]AccessToken tok)
        {
            try
            {

                JwtFunctions sifre = new JwtFunctions();
                
                firmaKullanicisi lec = _context.firmaKullanicisi
         .Where(x => x.id == tok.id).FirstOrDefault();
                Login login = new Login { kullanici_adi = lec.kullanici_adi, sifre = lec.sifre };
                if (lec != null)
                {
                    string key = sifre.generateJwtToken(login);
                    lec.token = key;
                    _context.SaveChanges();
                  

                    return new Response() { status = 200, response = lec };
                }
                return new Response() { status = 500, response = "Kullanıcı adı veya şifre yanlış" };
            }
            catch (Exception)
            {
                return new Response() { status = 500, response = "Hatayla karşılaşıldı" };
            }
        }

        [HttpPost]
        [Route("[controller]/register")]
        public Response register([FromBody]FirmaRegisterRequest req)
        {
            try
            {
                firmaKullanicisi lec = _context.firmaKullanicisi.Where(x => x.kullanici_adi == req.kullanici_adi).FirstOrDefault();

                if (lec == null)
                {
                    JwtFunctions sifre = new JwtFunctions();
                    string sifre2 = sifre.Encrypt(sifre.Encrypt(req.sifre));

                    firmaKullanicisi freq = new firmaKullanicisi {
                            kullanici_adi = req.kullanici_adi,
                            sifre = sifre2,
                            firma_mail = req.firma_mail,
                            firma_adi = req.firma_adi,
                            firma_tel1 = req.firma_tel1,
                            ekleme_tarihi=DateTime.Now
                    };
                    
                    _context.firmaKullanicisi.Add(freq);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu kullanıcı mevcuttur.Lütfen farklı bir kullanıcı adı giriniz" };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Hatayla karşılaşıldı" };
            }
        }

        [HttpPost]
        [Route("[controller]/firmabilgileri")]
        public Response firmabilgileri([FromForm]FirmaSettingsRequest req)
        {
            try
            {
                firmaKullanicisi firm = _context.firmaKullanicisi.Where(x => x.id == req.id).FirstOrDefault();
                if (firm != null)
                {
                    firm.adi = req.adi;
                    firm.soyadi = req.soyadi;
                    firm.adres = req.adres;
                    firm.kullanici_adi = req.kullanici_adi;
                    firm.firma_iban = req.firma_iban;
                    firm.firma_adi = req.firma_adi;
                    firm.firma_adres = req.firma_adres;
                    firm.firma_domain = req.firma_domain;
                    firm.firma_tel1 = req.firma_tel1;
                    firm.firma_tel2 = req.firma_tel2;
                    firm.firma_mail = req.firma_mail;
                    firm.firma_facebook = req.firma_facebook;
                    firm.firma_instagram = req.firma_instagram;
                    firm.firma_twitter = req.firma_twitter;
                    firm.firma_linkedin = req.firma_linkedin;
                    firm.footer_yazi = req.footeryazi;
                    if (req.firma_logo != null)
                     {
                             var extension = Path.GetExtension(req.firma_logo.FileName);
                              var newimagename = Guid.NewGuid() + extension;
                               var location = Path.Combine(Directory.GetCurrentDirectory(),"images/firmalogo",newimagename);
                               var stream = new FileStream(location, FileMode.Create);
                               req.firma_logo.CopyTo(stream);
                        firm.firma_logo = newimagename;
                     }
                    if (req.firma_slider != null)
                    {
                        var extension = Path.GetExtension(req.firma_slider.FileName);
                        var newimagename = Guid.NewGuid() + extension;
                        var location = Path.Combine(Directory.GetCurrentDirectory(), "images/slider", newimagename);
                        var stream = new FileStream(location, FileMode.Create);
                        req.firma_slider.CopyTo(stream);
                        firm.firma_slider = newimagename;
                    }
                    _context.SaveChanges();
                }
                return new Response() { status = 200, response = "Güncelleme başarılı" };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
        [HttpGet]
        [Route("[controller]/firmabilgilerilistesi/{firmaid}")]
        public Response firmabilgilerilistesi(int firmaid)
        {
            try
            {


                List<firmaKullanicisi> res = _context.firmaKullanicisi.Where(x => x.id == firmaid).ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
        [HttpGet]
        [Route("[controller]/firmalistesi")]
        public Response firmalistesi()
        {
            try
            {
                 List<firmaKullanicisi> res= _context.firmaKullanicisi.ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
    

        [HttpPost]
        [Route("[controller]/statusupdate")]
        public Response statusupdate(FirmaWebSiteStatusRequest req)
        {
            try
            {
                firmaKullanicisi firm = _context.firmaKullanicisi
                     .Where(x => x.id == req.firm_id).FirstOrDefault();
                if(firm!=null)
                {
                    firm.site_aktif_pasif = req.site_aktif_pasif;
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
