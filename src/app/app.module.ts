import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferBikeComponent } from './offer-bike/offer-bike.component';
import { RentBikeComponent } from './rent-bike/rent-bike.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BikezService } from './service/bikez.service';

@NgModule({
  declarations: [
    AppComponent,
    OfferBikeComponent,
    RentBikeComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [BikezService],
  bootstrap: [AppComponent]
})
export class AppModule { }
