using backend.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace backend.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
       : base(options)
        {
        }
        public DbSet<destekAdmin> destekAdmin { get; set; }
        public DbSet<destekFirma> destekFirma { get; set; }
        public DbSet<firmaKullanicisi> firmaKullanicisi { get; set; }
        public DbSet<firmaninMusterisi> firmaninMusterisi { get; set; }
        public DbSet<firmaUrunleri> firmaUrunleri { get; set; }
        public DbSet<firmaUrunOzellikleri> firmaUrunOzellikleri { get; set; }
        public DbSet<ozellik> ozellik { get; set; }
        public DbSet<superAdmin> superAdmin { get; set; }
        public DbSet<urunKategorisi> urunKategorisi { get; set; }
        public DbSet<urunKategoriOzellik> urunKategoriOzellik { get; set; }
        public DbSet<urunResim> urunResim { get; set; }
        public DbSet<urunSepetim> urunSepetim { get; set; }
        public DbSet<urunSiparis> urunSiparis { get; set; }
        public DbSet<urunSoruCevap> urunSoruCevap { get; set; }
        public DbSet<urunTipKodlari> urunTipKodlari { get; set; }
        public DbSet<urunYorumlari> urunYorumlari { get; set; }
        public DbSet<urunYorumResimleri> urunYorumResimleri { get; set; }

    }
}
