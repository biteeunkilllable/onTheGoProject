using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
namespace Context.Promise;

public class Promises
{
    public Promises(String Name, DateTime DatePromised, String Promise)
    {
        this.DatePromised = DatePromised;
        this.Name = Name;
        this.Promise = Promise;
    }
    public override String ToString()
    {
        return JsonConvert.SerializeObject(this);
    }
    [Key]
    public int PromiseCount { get; set; }
    public String Name { get; set; } = null!;
    public DateTime DatePromised { get; set; }
    public String Promise { get; set; } = null!;
}