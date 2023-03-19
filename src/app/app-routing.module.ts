import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path:'', pathMatch: 'full', redirectTo:'workout'},
    { path: 'workouts',
      loadChildren:() => import('./workouts/workout.module').then( m => m.WorkoutModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
