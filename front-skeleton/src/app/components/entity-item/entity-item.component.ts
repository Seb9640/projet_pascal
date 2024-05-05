import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localDb } from 'db/local';
import { Movie } from 'models/movie.model';
import { MovieService } from 'services/movie.service';

@Component({
  selector: 'entity-item',
  templateUrl: './entity-item.component.html',
  styleUrl: './entity-item.component.scss'
})
export class EntityItemComponent {

  entity?: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.getEntityDetails();
  }

  async getEntityDetails() {
    const id = +this.route?.snapshot?.paramMap?.get('id')!;

    this.movieService.getEntityById(id).subscribe(
      (entity: Movie) => {
        this.entity = entity
      },
      (error: any) => {
        console.error(error);
      }
    )
    // this.entity = await localDb.getData('entitys', id)
  }
  goBack(): void {
    window.history.back();
  }
}
