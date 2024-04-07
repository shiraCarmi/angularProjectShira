import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { VolunteerService } from './volunteer-service';
import { BrowserModule } from '@angular/platform-browser';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule, Routes } from '@angular/router';

const ROUTES:Routes=[
  {path:"volunteers",component:VolunteerListComponent},
  {path:"editVolunteer",component:EditVolunteerComponent}

];

@NgModule({
  declarations: [
    VolunteerListComponent,
    EditVolunteerComponent
  ],
  exports:[VolunteerListComponent],
  imports: [BrowserModule ,
    CommonModule,FormsModule , ReactiveFormsModule  ,RouterModule.forChild(ROUTES)   
  ],
  providers:[VolunteerService]
})
export class VolunteerModule {
  
}
