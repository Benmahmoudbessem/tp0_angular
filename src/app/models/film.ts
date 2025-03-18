export class Film {
  id: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  year: number;
  genre: string;
  isNew: boolean;
  trailerUrl?: string;

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    rating: number,
    year: number,
    genre: string,
    isNew: boolean,

  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.year = year;
    this.genre = genre;
    this.isNew = isNew;
  }
}

// Correction de l'export de FILM
export const FILM: Film[] = [
  new Film(1, "Captain America", "Film de super-héros", "captain_america.png", 5, 2011, "Drama", true),
  new Film(2, "Back Action", "Film d'action", "back_action.png", 7, 2012, "Action", true),
  new Film(3, "the send castle", "Film d'action", "the_sand_castle.png", 7, 2012, "fantasy", true),
  new Film(4, "ad vitam", "Film d'action", "ad_vitam.png", 7, 2012, "Action", true)
];
