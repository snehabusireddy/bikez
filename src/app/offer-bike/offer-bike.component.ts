import { Component, OnInit, ElementRef } from '@angular/core';
import { BikezService } from '../service/bikez.service';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { NgbRatingConfig, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-offer-bike',
  templateUrl: './offer-bike.component.html',
  styleUrls: ['./offer-bike.component.css'],
  providers: [NgbRatingConfig, NgbCarouselConfig]
})
export class OfferBikeComponent implements OnInit {

  myBikes: any
  detail_bike: any
  viewDetail = false
  faUser = faUser

  constructor(private bs: BikezService, private config: NgbRatingConfig, private elRef: ElementRef, private carousel_config: NgbCarouselConfig) {
    config.max = 5;
    config.readonly = true;
    carousel_config.interval = 1500;
  }

  ngOnInit(): void {
    this.getMyBikes()
  }

  isHighlighted(){
    return true
  }
  getMyBikes(){
    this.bs.getMyBikes().subscribe(
      data => {
        this.myBikes = data
      },
      err => {
        console.error(err)
      }
    )
  }

  viewBike(index: number, ele: Element){
    if(this.detail_bike == null){
      this.detail_bike = this.myBikes[index]
      this.viewDetail = true
    }else{
      if(this.detail_bike["id"]!=index){
        this.detail_bike = this.myBikes[index]
        this.viewDetail = true
      }else{
        this.viewDetail = !this.viewDetail
      }
    }
    if(this.viewDetail == true){
      var elements = document.getElementsByClassName('cs_bike_selected')
      while (elements.length)
        elements[0].classList.remove('cs_bike_selected');
        elements = document.getElementsByClassName('cs_bike_selected')
      ele.classList.add('cs_bike_selected')
    }else{
      ele.classList.remove('cs_bike_selected')
    }
    var full_ele = document.getElementById('full_bike_img')
    console.log(full_ele)
  }

}
