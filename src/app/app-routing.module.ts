import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferBikeComponent } from "./offer-bike/offer-bike.component";
import { HomeComponent } from "./home/home.component";
import { RentBikeComponent } from "./rent-bike/rent-bike.component";

const routes: Routes = [
  {path: 'offer-bike', component: OfferBikeComponent},
  {path: 'rent-bike', component: RentBikeComponent},
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
