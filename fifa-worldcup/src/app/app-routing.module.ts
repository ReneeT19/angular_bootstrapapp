import { LocationsComponent } from './locations/locations.component';
import { VenueComponent } from './venue/venue.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "venue", component: VenueComponent},
  {path: "locations", component: LocationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
