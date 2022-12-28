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
    public class SiparisController
    {
        private DataContext _context;
        public SiparisController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("[controller]/firmalistesi")]
        public Response siparislistesi()
        {
            try
            {
                List<firmaKullanicisi> res = _context.firmaKullanicisi.ToList();
                return new Response() { status = 200, response = res };
            }
            catch (Exception)
            {

                return new Response() { status = 500, response = "Liste oluşturulurken hata oluştu" };
            }
        }
    }
}
