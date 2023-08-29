using Context.ConnectionPoint;
using Context.Promise;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Routes.Controllers;
[Route("api/[Controller]/[action]")]
public class PromiseHandler : ControllerBase
{
    [ActionName("")]
    public String Default() => "Hola Mundo";
    public IActionResult GetPromsies() => Ok(JsonConvert.SerializeObject(
            new ConnectionPoint().promises.Select(a => a).ToArray()
            ));
    public IActionResult AddPromise([FromBody] Promises promise)
    {
        System.Console.WriteLine(promise);
        var db = new ConnectionPoint();
        db.promises.Add(promise);
        db.SaveChanges();
        return Ok("has been added");
    }
}