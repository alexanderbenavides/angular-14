import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesComponent } from './movies.component';
const routes: Routes = [
    {
      path: '',
      component: MoviesComponent
    },
    {
      path: 'peliculas/:id',
      component: MoviesListComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
