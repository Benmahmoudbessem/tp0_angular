import { Component, NgModule } from '@angular/core';
import { Film, FILM } from '../../models/film';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  filmId ?:any;
  films:Film[] = FILM;
  safeTrailerUrl?: SafeResourceUrl;
  showModal = false;
  film?: Film;



constructor(private route: ActivatedRoute , private sanitizer:DomSanitizer){}

ngOnInit(){
  console.log("INSIDE ngOnInit")
  this.filmId= this.route.snapshot.paramMap.get('id');
  console.log("film id: ", this.filmId)
  console.log("film : " ,this.films)
  this.film = this.films.find(f => f.id ===  parseInt(this.filmId));
  console.log("film", this.film)
}

openModel(){
  if(this.film && this.film.trailerUrl){
    const embedUrl = this.film.trailerUrl.replace("watch?v=", "embed/");
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    this.showModal = true;
  }
}

closeModal(){
  this.showModal = false;
}
}
