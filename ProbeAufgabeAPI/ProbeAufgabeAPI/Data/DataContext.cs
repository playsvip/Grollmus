using Microsoft.EntityFrameworkCore;

namespace ProbeAufgabeAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options) { }

        public DbSet<DeviceInformation> DeviceInformations => Set<DeviceInformation>();
    }
}
