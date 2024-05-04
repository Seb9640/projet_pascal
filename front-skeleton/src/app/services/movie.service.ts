import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EntityService } from "./entity.service";
import { Movie } from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService extends EntityService<Movie> {

  constructor(http: HttpClient) {
    super(http, 'movies');
  }

  // Vous pouvez ajouter des méthodes spécifiques pour les films ici si nécessaire
}
