import { Component, OnInit } from "@angular/core"
import { Movie } from "models/movie.model"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import movies from "datas/movies";
import { localDb } from "db/local";
import { Review } from "models/review.model";


@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  popularAllReviews: any[] = [];
  popularReviews: any[] = [];

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.loadPopularReviews();
  }

  async loadPopularReviews() {
    this.popularAllReviews =  await localDb.getAllData('review')
    this.popularAllReviews.map(async (review) => {
      if(review.entity_type === 'movie'){
        review.entity =  await localDb.getData('movies', review.entity_id)
      }
      return review
    });
    this.popularReviews = this.popularAllReviews
  }

  setFilterValue(value: number){
    this.popularReviews = this.popularAllReviews.filter(d => d.rating === value)
    console.log(this.popularReviews);

  }

}
