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
    [Route("[controller]/{name}")]
    public class AdminController
    {
        private DataContext _context;
        public AdminController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        public Response login([FromBody]Login login)
        {
            try
            {
                JwtFunctions sifre = new JwtFunctions();
                string sifre2 = sifre.Encrypt(sifre.Encrypt(login.sifre));
                superAdmin lec = _context.superAdmin
         .Where(x => x.kullanici_adi == login.kullanici_adi && x.sifre == sifre2).FirstOrDefault();

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
    }
}
