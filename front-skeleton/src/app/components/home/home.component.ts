import { Component, OnInit } from "@angular/core"
import { ReviewService } from "services/review.service";


@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  popularAllReviews: any[] = [];
  popularReviews: any[] = [];
  readMore: boolean = false
  isLoading: boolean = true
  currentReviewId?: string

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    window.scrollTo(0,0)
    this.loadPopularReviews();
  }

  async loadPopularReviews() {
    this.reviewService.getAllEntities().subscribe(
      (reviews) => {
        this.popularAllReviews = reviews
        this.isLoading = false
        // this.popularAllReviews.map(async (review) => {
        //   if(review.entity_type === 'movie'){
        //     review.entity =  await localDb.getData('movies', review.entity_id)
        //   }
        //   return review
        // });
        this.popularReviews = this.popularAllReviews

      },
      (error) => {
        this.isLoading = false
        console.error(error);
      }
    );
    // this.popularAllReviews =  await localDb.getAllData('review')

  }

  setFilterValue(value: number){
    if(value === 6){
      this.popularReviews = this.popularAllReviews
      return
    }
    this.popularReviews = this.popularAllReviews.filter(d => d.rating === value)
    console.log(this.popularReviews);

  }
  setFilterType(type: string){
    if(type === "all"){
      this.popularReviews = this.popularAllReviews
      return
    }
    this.popularReviews = this.popularAllReviews.filter(d => d.entityType === type)

  }

  setReadMore(id: string){
    this.readMore = true
    this.currentReviewId = id
  }

  closeModal(){
    this.readMore = false
    this.currentReviewId = undefined
  }

}
