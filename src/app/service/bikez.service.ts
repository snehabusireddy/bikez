import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BikezService {

  constructor(private http: HttpClient) { }

  getAllBikes(){
    return this.http.get("assets/mock/bikes.json")
  }

  getMyBikes(){
    return this.http.get("assets/mock/offer_bikes.json")
  }

  getBike(id: string){
    console.log(id)
    return this.http.get("assets/mock/full_bike.json")
  }
}
