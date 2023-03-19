import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { WorkoutsService } from '../services/workouts.service';
import { Workout } from './models/workout';

//import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {



  workouts$: Observable<Workout[]>;
  displayedColumns = ['name', 'category'];


  constructor(
    private workoutService : WorkoutsService,
    public dialog: MatDialog

  ) {
    this.workouts$= workoutService.list()
    .pipe(
    catchError(error => {
         this.onError('Error ao carregar cursos')
       return   of([])
      })
   );


  }

  ngOnInit(): void {
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }


}
