import { Component, OnInit } from '@angular/core';
import { BikezService } from '../service/bikez.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { HostListener } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rent-bike',
  templateUrl: './rent-bike.component.html',
  styleUrls: ['./rent-bike.component.css'],
  providers: [NgbRatingConfig, NgbCarouselConfig]
})
export class RentBikeComponent implements OnInit {

  bikes: any
  full_view = true
  full_bike: any
  faUser = faUserCircle
  scroll_limit = 70
  images = []

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    let element = document.querySelector('.cs_partial_view');
    console.log(window.pageYOffset + ' --> ' + element.clientHeight)
    console.log(element.clientHeight)
    if (window.pageYOffset > this.scroll_limit) {
      element.classList.add('cs_fix_top');
    } else {
      element.classList.remove('cs_fix_top');
    }
  }

  constructor(private bs: BikezService, private config: NgbRatingConfig, private carousel_config: NgbCarouselConfig) {
    config.max = 5;
    config.readonly = true;
    carousel_config.interval = 1500;
  }

  ngOnInit(): void {
    this.getAllBikes()
  }

  getAllBikes() {

    this.bs.getAllBikes().subscribe(
      data => {
        this.bikes = data
      },
      error => {
        console.error(error)
      }
    )
  }

  viewBike(index: number) {
    if (this.full_view == true) {
      this.full_view = !this.full_view
    }
    this.bs.getBike(this.bikes[index]['id']).subscribe(
      data => {
        this.full_bike = data
      },
      error => {
        console.error(error)
      }
    )
  }
}
