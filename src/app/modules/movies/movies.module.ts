import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CardModule,
    ButtonModule,
    ListboxModule,
    FormsModule,
    TagModule,
    ProgressSpinnerModule
  ]
})
export class MoviesModule { }
