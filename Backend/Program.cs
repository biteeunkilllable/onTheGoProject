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
        builder.Services.AddCors(builder =>
            {
                builder.AddDefaultPolicy(
                    policy =>
                    {
                        policy.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    });
            });
        var app = builder.Build();
        app.MapControllers();
        app.UseCors();
        app.Run();

    }
}