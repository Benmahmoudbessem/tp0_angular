import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

import { NgModule } from '@angular/core';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { NotFoundComponentComponent } from './component/not-found-component/not-found-component.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';


export const routes: Routes = [

  {path: '',component: HomeComponent},
  {path: 'movies-list',component: MovieListComponent},

  {path: 'movie-details/:id', component:MovieDetailComponent},
  {path: '**',component:  NotFoundComponentComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports:[ RouterModule]
})
 export class AppRoutingModule{}
