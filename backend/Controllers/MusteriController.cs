using backend.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using backend.RequestModel;
using backend.Model;
using backend.ResponseModel;
using backend.FunctionModel;

namespace backend.Controllers
{
    public class MusteriController
    {
        private DataContext _context;
        public MusteriController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("[controller]/login")]
        public Response login(Login login)
        {
            try
            {
                JwtFunctions sifre = new JwtFunctions();
                string sifre2 = sifre.Encrypt(sifre.Encrypt(login.sifre));
                firmaninMusterisi lec = _context.firmaninMusterisi
         .Where(x => x.kullanici_adi == login.kullanici_adi && x.sifre == sifre2).FirstOrDefault();

                if (lec != null)
                {
                    string key = sifre.generateJwtToken(login);
                    lec.token = key;
                    _context.SaveChanges();
                    MusteriLoginResponse response = new MusteriLoginResponse()
                    {
                        adi=lec.adi,
                        address=lec.address,
                        firma_id=lec.firma_id,
                        kullanici_adi=lec.kullanici_adi,
                        mail=lec.mail,
                        soyadi=lec.soyadi,
                        telefon=lec.telefon,
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
        [Route("[controller]/register")]
        public Response register(MusteriRegisterRequest req)
        {
            try
            {
                firmaninMusterisi lec = _context.firmaninMusterisi.Where(x => (x.kullanici_adi == req.kullanici_adi || x.mail == req.mail) && x.firma_id==req.firma_id).FirstOrDefault();

                if (lec == null)
                {
                    JwtFunctions sifre = new JwtFunctions();
                    string sifre2 = sifre.Encrypt(sifre.Encrypt(req.sifre));

                    firmaninMusterisi freq = new firmaninMusterisi
                    {
                        kullanici_adi = req.kullanici_adi,
                        sifre = sifre2,
                        address=req.address,
                        adi=req.adi,
                        firma_id=req.firma_id,
                        mail=req.mail,
                        soyadi=req.soyadi,
                        telefon=req.telefon,
                        ekleme_tarihi = DateTime.Now
                    };

                    _context.firmaninMusterisi.Add(freq);
                    _context.SaveChanges();
                    return new Response() { status = 200, response = "Kayıt işlemi başarılı" };
                }
                return new Response() { status = 500, response = "Bu kullanıcı mevcuttur.Lütfen farklı bir kullanıcı adı ve mail adresi giriniz" };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Hatayla karşılaşıldı" };
            }
        }



    }
}
