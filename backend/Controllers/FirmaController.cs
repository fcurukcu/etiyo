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
                  token=lec.token
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
