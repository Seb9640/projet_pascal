import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localDb } from 'db/local';
import { Movie } from 'models/movie.model';
import { MovieService } from 'services/movie.service';

@Component({
  selector: 'film-item',
  templateUrl: './film-item.component.html',
  styleUrl: './film-item.component.scss'
})
export class FilmItemComponent {

  movie?: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.getFilmDetails();
  }

  async getFilmDetails() {
    const id = +this.route?.snapshot?.paramMap?.get('id')!;

    this.movieService.getEntityById(id).subscribe(
      (movie: Movie) => {
        this.movie = movie
      },
      (error) => {
        console.error(error);
      }
    )
    // this.movie = await localDb.getData('movies', id)
  }
  goBack(): void {
    window.history.back();
  }
}
