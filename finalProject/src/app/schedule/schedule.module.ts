import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleService } from './Schedule-service';



@NgModule({
  declarations: [
    SchedulingComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[SchedulingComponent],
  providers:[ScheduleService]
})
export class ScheduleModule { }
