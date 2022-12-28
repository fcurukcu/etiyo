using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net.NetworkInformation;
using System.Security.Authentication;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using backend.ResponseModel;
using backend.Model;
using backend.RequestModel;

namespace backend.FunctionModel
{
    public class JwtFunctions
    {
        string hash = "";
        public string Encrypt(string pass)
        {
            byte[] data = Encoding.Default.GetBytes(pass);
            using (MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider())
            {
                byte[] keys = md5.ComputeHash(Encoding.Default.GetBytes(hash));
                using (TripleDESCryptoServiceProvider tripleDES = new TripleDESCryptoServiceProvider() { Key = keys, Mode = CipherMode.ECB, Padding = PaddingMode.PKCS7 })
                {
                    ICryptoTransform transform = tripleDES.CreateEncryptor();
                    byte[] results = transform.TransformFinalBlock(data, 0, data.Length);
                    return Convert.ToBase64String(results, 0, results.Length);
                }

            }
        }

        public string generateJwtToken(Login lec)
        {
            // generate token that is valid for 7 days
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Convert.ToString(lec.kullanici_adi)));
            var credentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim("kullanici_adi", lec.kullanici_adi.ToString()),
                    new Claim("sifre", lec.sifre.ToString()),
                    new Claim("login-time", DateTime.Now.ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss")),
            };

            var token = new JwtSecurityToken(Convert.ToString(lec.kullanici_adi), Convert.ToString(lec.kullanici_adi), claims, expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

             return token.EncodedHeader+"."+token.EncodedPayload+"."+ Encrypt(DateTime.Now.ToString()).ToString();
        }
    }
}
