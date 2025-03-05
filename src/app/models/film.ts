import { raceWith } from "rxjs";

export class Film {

  id:number;
  title:string;
  description: string;
  image: string;
  rating:number;
  year: number;
  genre: string;
  isNew : boolean;
  constructor(id: number,title:string, description: string, image: string, rating: number,year: number,genre: string,isNew: boolean)
  {
    this.id=id;
    this.title=title;
    this.description=description;
    this.rating= rating;
    this.image=image;
    this.year=year;
    this.genre=genre;
    this.isNew=isNew;

  }
}
