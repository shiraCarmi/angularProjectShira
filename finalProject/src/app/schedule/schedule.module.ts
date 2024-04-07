import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleService } from './Schedule-service';
import { RouterModule, Routes } from '@angular/router';

const ROUTES:Routes=[
  {path:"Scheduling",component:SchedulingComponent}
]


@NgModule({
  declarations: [
    SchedulingComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(ROUTES)
  ],
  exports:[SchedulingComponent],
  providers:[ScheduleService]
})
export class ScheduleModule { }
