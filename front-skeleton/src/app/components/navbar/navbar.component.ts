import { Component } from "@angular/core"
import { Link } from "models/links.model"
import { MovieService } from "services/movie.service"

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = [
    {
      name: "Accueil",
      href: 'home',
      icon: 'house'
    },
    {
      name: "Films",
      href: 'films',
      icon: 'film'
    },
    {
      name: "Places",
      href: 'places',
      icon: 'location-dot'
    },
    // {
    //   name: "Avis",
    //   href: 'review',
    //   icon: 'comment'
    // },
  ]

  constructor(private movieService: MovieService) {

    this.getData()
  }

  getData() {
    
  }



}
