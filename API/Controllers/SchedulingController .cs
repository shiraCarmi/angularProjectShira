using API.interfaces;
using file_service;
using Microsoft.AspNetCore.Mvc;
using models;
using System.Text.Json;

namespace API.Controllers.SchedulingController;

[ApiController]
[Route("[controller]/[action]")]
public class SchedulingController : ControllerBase
{
    private MyFileService _file1 = new MyFileService("schedule.json", "files");

    [HttpGet("schedule")]
    public IActionResult GetSchedule()
    {
        List<Schedule> objectsschedule = this._file1.Gets<Schedule>();

        if (objectsschedule.Count > 0)
        {
            string[] arr = new string[6];
            arr = objectsschedule[0].schedule;
            Console.WriteLine("arr " + objectsschedule[0].schedule);
            return Ok(arr);
        }
        else
        {
            // Handle the case where the list is empty
            return NotFound();
        }

    }

    [HttpPut("put")]
    public void updateSchedule(String[] schedule){
  //  List<Schedule> objectsschedule = this._file1.Gets<Schedule>();
   Console.WriteLine("hereeeeeeeeeeeeeeee"+schedule);
    Schedule newSchedule=new Schedule();
    newSchedule.schedule=schedule;
    newSchedule.id="mySchedule";
    string josonObj=JsonSerializer.Serialize(newSchedule);
    string josonObjNEW="["+josonObj+"]";
    this._file1.Write(josonObjNEW);

    }
}