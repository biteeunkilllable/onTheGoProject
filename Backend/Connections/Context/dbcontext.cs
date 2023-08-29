using Microsoft.EntityFrameworkCore;
using Context.Promise;

namespace Context.ConnectionPoint;
public class ConnectionPoint : DbContext
{
    public DbSet<Promises> promises { get; set; } = null!;
    protected override void OnConfiguring(DbContextOptionsBuilder builder)
    {
        string Route = "Database/storage.db";
        builder.UseSqlite("Filename=" + Route);
    }
}