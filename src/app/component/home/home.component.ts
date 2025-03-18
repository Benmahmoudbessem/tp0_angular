import { Component } from '@angular/core';
import { FILM, Film } from '../../models/film';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
films:Film[] = FILM;

constructor(private router : Router) { }

goToMoviesList(){
  this.router.navigate(['movies-list']);
}
}
