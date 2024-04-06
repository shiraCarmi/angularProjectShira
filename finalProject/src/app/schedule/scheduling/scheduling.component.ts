import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ScheduleService } from '../Schedule-service';
import { VolunteerService } from 'src/app/volunteer/volunteer-service';
import { volunteer } from 'src/app/voluntree.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  dayesArray: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
  selectorSchedule: String[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday",];
  selectorVolunteers?: volunteer[];

  constructor(private service: ScheduleService, private volunteers: VolunteerService) {

    this.ngOnInit();
    this.volunteers.getAllVolunteer().subscribe(vols => { this.selectorVolunteers = vols; this.flag3 = true });

    // this.ngOnInit().then(res=>{
    // if (this.selectorSchedule)
    //   mySchedule: new FormGroup({
    //     "dayes": new FormArray([
    //       new FormControl(this.selectorSchedule[0]),
    //       new FormControl(this.selectorSchedule[1]),
    //       new FormControl(this.selectorSchedule[2]),
    //       new FormControl(this.selectorSchedule[3]),
    //       new FormControl(this.selectorSchedule[4]),
    //       new FormControl(this.selectorSchedule[5])])
    //   });})


  }
  mySchedule: any;
  myMat: volunteer[][] = [[]];
  flag1: Boolean = false;
  flag2: Boolean = false;
  flag3: Boolean = false;

  ngOnInit(): void {
    this.service.getSchedule().subscribe(values => {
      this.selectorSchedule = values;
      if (this.selectorSchedule) {
        this.mySchedule = new FormGroup({
          "sunday": new FormControl(this.selectorSchedule[0]),
          "monday": new FormControl(this.selectorSchedule[1]),
          "tuesday": new FormControl(this.selectorSchedule[2]),
          "wednesday": new FormControl(this.selectorSchedule[3]),
          "thursday": new FormControl(this.selectorSchedule[4]),
          "friday": new FormControl(this.selectorSchedule[5])
        });
        this.flag1 = true;
      }
    });

    for (let i = 0; i < 6; i++) {
      this.getVolunteerToDay(i);
    }




  }

  getByIdVolunteer = (id: String): string => {
    if (this.selectorVolunteers)
      return this.service.getNameOfId(id, this.selectorVolunteers);
    return "";
  }

  getVolunteerToDay = (i: number) => {
    this.service.getVolunteerToDay(i).subscribe(value => {
      this.myMat[i] = value;
      this.flag2 = true;
    });
  }
  saveSchedule = () => {
    // if (this.mySchedule.value.sunday)
      this.selectorSchedule[0] = this.mySchedule.value.sunday;
    // if (this.mySchedule.value.monday)
      this.selectorSchedule[1] = this.mySchedule.value.monday;
    // if (this.mySchedule.value.tuesday)
      this.selectorSchedule[2] = this.mySchedule.value.tuesday;
    // if (this.mySchedule.value.wednesday)
      this.selectorSchedule[3] = this.mySchedule.value.wednesday;
    // if (this.mySchedule.value.thursday)
      this.selectorSchedule[4] = this.mySchedule.value.thursday;
    
      this.selectorSchedule[5] = this.mySchedule.value.friday;
    this.service.saveSchedule(this.selectorSchedule);
  }

}
