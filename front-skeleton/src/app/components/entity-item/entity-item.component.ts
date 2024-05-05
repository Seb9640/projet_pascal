import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { localDb } from 'db/local';
import { Movie } from 'models/movie.model';
import { MovieService } from 'services/movie.service';
import { PlaceService } from 'services/place.service';
import { ReviewService } from 'services/review.service';

@Component({
  selector: 'entity-item',
  templateUrl: './entity-item.component.html',
  styleUrl: './entity-item.component.scss'
})
export class EntityItemComponent {

  entity?: any;
  entityName?: string;
  entityId?: string;
  isLoading: boolean = true
  reviewData: any

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private reviewService: ReviewService,
    private placeService: PlaceService,
  ) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.getEntityDetails();
  }

  async getEntityDetails() {


    this.route.params.subscribe(async params => {
      this.entityName = params['model'] || 'movies';
      this.entityId = params['id'];
      let service: any
      let entityType: string = ""

      if(this.entityName === 'movies'){
        service = this.movieService
        entityType = 'movie'
      }else if(this.entityName === 'places'){
        service = this.placeService
        entityType = 'place'
      }
      service.getEntityById(this.entityId).subscribe(
        (entity: Movie) => {
          this.entity = entity
          this.isLoading = false
        },
        (error: any) => {
          this.isLoading = false
          console.error(error);
        }
      )
      if(this.entityId && entityType){
        this.reviewService.getReviewByEntity(entityType, this.entityId).subscribe(
          (reviewData)=>{
            this.reviewData = reviewData
          }
        )
      }
    })

    // this.entity = await localDb.getData('entitys', id)
  }
  goBack(): void {
    window.history.back();
  }
}
