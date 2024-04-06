
import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer-service';
import { volunteer } from 'src/app/voluntree.model';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent implements OnInit {
  volunteers:volunteer[]=[];
  constructor(private serviceVolunteer:VolunteerService,private rout:Router) {
  
   }
selectorVolunteer?:volunteer|undefined;

 ngOnInit(): void {
  
  this.serviceVolunteer.getAllVolunteer().subscribe(volunteerObservable => this.volunteers=volunteerObservable,err=>{console.log(err);});
}

editVolunteer=(v:volunteer) => {
  
  this.serviceVolunteer.selectorvolunteer=v;
  this.rout.navigateByUrl("/editVolunteer");
}


}
