import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isNavbarCollapsed = true;
  isLoggedIn = false;
  faBell = faBell

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    this.isLoggedIn = true
  }

}
