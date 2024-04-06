import { Component, OnInit, Output } from '@angular/core';
import { volunteer } from 'src/app/voluntree.model';
import { VolunteerService } from '../volunteer-service';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.css']
})
export class EditVolunteerComponent implements OnInit {


  constructor(private service: VolunteerService,private rout:Router) {
    this.selectorVolunteerEdit = service.selectorvolunteer;
    this.myfromGroup = new FormGroup({
      "name": new FormControl(this.selectorVolunteerEdit?.name, [Validators.maxLength(30), Validators.minLength(2)]),
      "phon": new FormControl(this.selectorVolunteerEdit?.phon, [Validators.minLength(9), Validators.maxLength(10), Validators.required]),
      "dayes": new FormArray([new FormControl(this.selectorVolunteerEdit?.days[0]),
                              new FormControl(this.selectorVolunteerEdit?.days[1]),
                              new FormControl(this.selectorVolunteerEdit?.days[2]),
                              new FormControl(this.selectorVolunteerEdit?.days[3]),
                              new FormControl(this.selectorVolunteerEdit?.days[4]),
                              new FormControl(this.selectorVolunteerEdit?.days[5])
                            ]),});
                          }
  myfromGroup: FormGroup;           
  selectorVolunteerEdit?: volunteer;
  dayesArray: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday",];

  ngOnInit(): void {

  }
  get dayes(): FormArray {
    return this.myfromGroup?.get('dayes') as FormArray;
  }
 saveVolunteer = () => {
    if (this.myfromGroup.valid) {
      let vol = new volunteer();
      vol.days = this.dayes.value;
      if(this.selectorVolunteerEdit)
      vol.id=this.selectorVolunteerEdit.id;
      vol.name = this.myfromGroup.value.name;
      vol.phon = this.myfromGroup.value.phon;
      this.service.selectorvolunteer=vol;
      this.service.updateVolunteer().subscribe(answer=>{
        if(<boolean>answer)
        this.rout.navigateByUrl("/volunteers");
        else
        alert("this volunteer find in oneday that you remove");

      })
      
      
      
      

    }
  }


  //  name:string ="" ;
  //     days:Boolean[] =[] ;
  //     id:string=""; 
  //     phon:string="0000000000";
  //     active:Boolean=true;


}
