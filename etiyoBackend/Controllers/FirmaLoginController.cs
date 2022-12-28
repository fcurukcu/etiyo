using etiyoBackend.RequestModels;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Web;
using System.Net.Http;
using System.Web.Http;
namespace etiyoBackend.Controllers
{
    public class FirmaLoginController
    {
        public HttpResponseMessage Post(Login login)
        {
            try
            {
                DataTable table = new DataTable();

                string query = @"select * from dbo.firmaKullanicisi where kullanici_adi='" + login.kullanici_adi + @"' and sifre='" + login.sifre + @"'";

                var con = new SqlConnection(ConfigurationManager.ConnectionStrings["etiyoDB"].ConnectionString);
                var command = new SqlCommand(query, con);

                using (var da = new SqlDataAdapter(command))
                {
                    command.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return Request.CreateResponse(HttpStatusCode.OK, table);
            }
            catch (Exception ex)
            {

                return "Failed to add";
            }
        }
    }
}