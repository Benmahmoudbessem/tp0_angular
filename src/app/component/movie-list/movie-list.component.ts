import { Component } from '@angular/core';
import { FILM, Film } from '../../models/film';
import { CommonModule } from '@angular/common';
import { SingleMovieComponent } from '../single-movie/single-movie.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule,SingleMovieComponent,RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
categories:string[] = ["All","Action","Comedy","Drama","Horror","Sci-Fi", "fantasy"];

films:Film[] = FILM;
selectedCategory: string= 'ALL';
filteredFilms!: Film[];


selectCategory(category:string){
  this.selectedCategory = category;
  console.log("selected category: ", this.selectedCategory)
}

get filtereFilms() : Film[]{
  return this.selectedCategory === 'ALL'
  ?this.films  : this.films.filter(f => f.genre === this.selectedCategory);
}
}
