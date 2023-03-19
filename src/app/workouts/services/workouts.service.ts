import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Workout } from '../workout/models/workout';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {


  private readonly API = '99/api/workouts';

  constructor(private httpClient: HttpClient) { }


  list(){

    return this.httpClient.get<Workout[]>(this.API).pipe(
      first(), //corta subscricao depois que faz a primeira chamada
      delay(100),
      tap(workouts => console.log(workouts))
    );

  }



}
