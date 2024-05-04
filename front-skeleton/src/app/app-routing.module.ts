import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { ErrorPageComponent } from "components/error-page/error-page.component"
import { FilmItemComponent } from "components/film-item/film-item.component"
import { FilmListComponent } from "components/film-list/film-list.component"
import { HomeComponent } from "components/home/home.component"
import { PlaceListComponent } from "components/place-list/place-list.component"
import { SigninComponent } from "components/signin/signin.component"
import { SignupComponent } from "components/signup/signup.component"
import { AboutComponent } from "pages/about/about.component"
import { AdminComponent } from "pages/admin/admin.component"

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "films", component: FilmListComponent },
  { path: "films/:id", component: FilmItemComponent },
  { path: "places", component: PlaceListComponent },
  { path: "about", component: AboutComponent },
  { path: "admin", component: AdminComponent },
  { path: "admin/:entityName", component: AdminComponent },
  { path: "admin/:entityName/:entityId", component: AdminComponent },
  { path: "error-page", component: ErrorPageComponent },
  { path: "**", component: ErrorPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
