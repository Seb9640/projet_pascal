import { Component, OnInit } from "@angular/core"
import { Movie } from "models/movie.model"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import movies from "datas/movies";
import { localDb } from "db/local";
import { Review } from "models/review.model";


@Component({
  selector: "film-list",
  templateUrl: "./film-list.component.html",
  styleUrls: ["./film-list.component.scss"],
})
export class FilmListComponent implements OnInit {


  films: any[] = []
  reviews: any[] = []
  currentPage: number = 1;
  reviewsPerPage: number = 8;
  filteredMovies: Movie[] = []; // Liste filtrée d'avis
  searchTerm: string = ''; // Terme de recherche
  AddEditReview: boolean = false
  isDisplayReview: boolean = false
  currentData: any
  title?: string
  currentReviews?: any[]
  reviewModel: Review = {
    full_name: '',
    email: '',
    entity_type: "movie",
    summary: '',
    review: '',
    image: '',
    rating: 2,
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      this.currentPage = params['page'] ? +params['page'] : 1;
      this.films = await localDb.getAllData('movies')
      this.reviews = await localDb.getAllData('review')
    });
  }


  previousPage() {
    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.changePage(this.currentPage + 1);
    }
  }

  changePage(page: number) {
    this.router.navigate([], { relativeTo: this.route, queryParams: { page: page } });
  }

  getPages(): number[] {
    const totalPages = this.totalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  totalPages(): number {
    return Math.ceil(this.films.length / this.reviewsPerPage);
  }



  getMoviesForPage(): any[] {
    const startIndex = (this.currentPage - 1) * this.reviewsPerPage;
    if (this.searchTerm.toLowerCase()) {
      return this.filteredMovies.slice(startIndex, startIndex + this.reviewsPerPage);
    }
    return this.films.slice(startIndex, startIndex + this.reviewsPerPage);
  }

  filterMovies() {
    this.filteredMovies = this.films.filter(review =>
      review?.title?.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  async displayReview(movie: Movie){
    this.currentData = movie
    this.isDisplayReview = true
    this.title = "Avis pour le film : "+movie.title
    this.currentReviews = (await localDb.search('review', 'entity_id', movie.id)).map((r: any) =>{
      r.entity = movie
      return r
    })
  }

  addReview(movie: Movie) {
    this.AddEditReview = true
    this.currentData = movie
    this.reviewModel.entity_id = movie.id
    this.title = "Noter le film : "+movie.title
  }
  closeModal(){
    this.AddEditReview = false
    this.currentData = undefined
    this.isDisplayReview = false
    this.currentReviews = []
    this.title = ""
  }
}
