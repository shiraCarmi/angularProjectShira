import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';

import { VolunteerModule } from './volunteer/volunteer.module';
import { VolunteerListComponent } from './volunteer/volunteer-list/volunteer-list.component';
import { EditVolunteerComponent } from './volunteer/edit-volunteer/edit-volunteer.component';
import { ScheduleModule } from './schedule/schedule.module';
import { SchedulingComponent } from './schedule/scheduling/scheduling.component';


const ROUTES : Routes=[
    
    {path:"Scheduling",component:ScheduleModule},
    {path:"volunteers",component:VolunteerModule}
    
   
    ];

@NgModule({
  declarations: [AppComponent],
  imports:[BrowserModule,RouterModule.forRoot(ROUTES),VolunteerModule,HttpClientModule,ScheduleModule],
  providers:[],
  bootstrap:[AppComponent]
})

export class AppModule { 
  
}
    