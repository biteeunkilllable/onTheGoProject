using Context.ConnectionPoint;
// using Context.Promise;

namespace MainNameSpace;
class MainNameSpace
{
    static void Main()
    {
        new ConnectionPoint().Database.EnsureCreated();
        var builder = WebApplication.CreateBuilder();
        builder.Services.AddControllers();
        var app = builder.Build();
        app.MapControllers();
        app.UseCors(builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
            });
        app.Run();

    }
}