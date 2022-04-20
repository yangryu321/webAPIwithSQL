using ClassLibrary.DatabaseSettings;
using ClassLibrary.Models;
using Microsoft.EntityFrameworkCore;

namespace ClassLibrary.DataAccess
{
    public class DataContext : DbContext
    {
        private readonly IDatabaseSettings databaseSettings;
        private string Connectionstring = "server = DESKTOP-STD379L; database = WebApiDb; Trusted_Connection = True;";

    
        public DataContext(IDatabaseSettings databaseSettings )
        {
            this.databaseSettings = databaseSettings;
        }
        //public DataContext(DbContextOptions<DataContext> options) : base(options) { }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Connectionstring);
        }

        public DbSet<Status> Statuses { get; set; }

        public DbSet<InspectionType> InspectionTypes { get; set; }

        public DbSet<Inspection> Inspections { get; set; }

    }
}
