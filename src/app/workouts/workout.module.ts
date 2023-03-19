import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout/workout.component';

@NgModule({
  declarations: [
    WorkoutComponent
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class WorkoutModule { }
