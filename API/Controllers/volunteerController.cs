using API.interfaces;
using file_service;
using Microsoft.AspNetCore.Mvc;
using models;
using API.Controllers.SchedulingController;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class VolunteerController : ControllerBase
{

//to volunteers databace;
  private MyFileService _file = new MyFileService("volunteers.json", "files");
  //to schedule databace;
   private MyFileService _file11 = new MyFileService("schedule.json", "files");

  [HttpGet("{day}")]
  public List<Volunteer> GetByDay(int day)
  {
    //  Mylogger.WriteMessage($"controller: {nameof(PizzaController)} action: {nameof(GetById)} id:{id}");
    //return Ip.GetById(id);
    List<Volunteer> volunteers = this._file.Gets<Volunteer>();
    List<Volunteer> volPerDay = new List<Volunteer>();
    for (int i = 0; i < volunteers.Count; i++)
    {
      if (volunteers[i].days[day] == true)

        volPerDay.Add(volunteers[i]);
    }

    return volPerDay;
  }
  [HttpGet]

  public List<Volunteer> Get()
  {
    List<Volunteer> volunteers = this._file.Gets<Volunteer>();
    return volunteers;
  }
  [HttpGet("byId/{id}")]
  public IActionResult GetById(string id)
  {
    List<Volunteer> volunteers = this._file.Gets<Volunteer>();
    foreach (var vol in volunteers)
    {
      if (vol.id == id)
        return Ok(vol);

    }
    return NotFound();
  }


  [HttpPut("Update")]
  public bool Update(Volunteer v)
  {
    List<Volunteer> volunteers = this._file.Gets<Volunteer>();
     Console.WriteLine("beafor ");
    List<Schedule> objectsschedule = this._file11.Gets<Schedule>();
     Console.WriteLine("after" );

    if (objectsschedule.Count > 0)
    {
      string[] arr = new string[6];
      arr = objectsschedule[0].schedule;
      for (int i = 0; i < 6; i++)
      {
        if (v.days[i] == false && arr[i] == v.id)
          return false;

      }
      Console.WriteLine("hereeeeeeeeeeeeeeee " + volunteers[1].id);
      Console.WriteLine("v " + v.id);
      for (int i = 0; i < volunteers.Count(); i++)
      {
        Console.WriteLine("hereeeeeeeeeeeeeeee one " + i);

        if (volunteers[i].id == v.id)
        {
          volunteers[i].days = v.days;
          volunteers[i].phon = v.phon;
          volunteers[i].name = v.name;

        }
      }
      _file.Update<Volunteer>(volunteers);

      return true;
    }

    return false;
  }


  [HttpPost]
  public void AddVolunteer(Volunteer vol)
  {
    _file.AddItem(vol);
    return;
  }


 
 


}