import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { localDb } from 'db/local';
import { Place } from 'models/place.model';

@Component({
  selector: 'place-list',
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.scss'
})

export class PlaceListComponent implements OnInit {

 
  places: any[] = []
  currentPage: number = 1;
  placesPerPage: number = 8;
  filteredPlaces: Place[] = []; // Liste filtrée d'avis
  searchTerm: string = ''; // Terme de recherche

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(async (params) => {
      this.currentPage = params['page'] ? +params['page'] : 1;
      this.places = await localDb.getAllData('places')
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
    return Math.ceil(this.places.length / this.placesPerPage);
  }

  getPlacesForPage(): Place[] {
    const startIndex = (this.currentPage - 1) * this.placesPerPage;
    if(this.searchTerm.toLowerCase()){
      return this.filteredPlaces.slice(startIndex, startIndex + this.placesPerPage);
    }
    return this.places.slice(startIndex, startIndex + this.placesPerPage);
  }

  filterPlaces() {
    this.filteredPlaces = this.places.filter(place =>
      place?.title?.toLowerCase().includes(this.searchTerm.toLowerCase()) 
    );
  }
}
