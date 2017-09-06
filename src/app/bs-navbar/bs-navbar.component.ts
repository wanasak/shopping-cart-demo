import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  appUser: AppUser;

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(appUser => this.appUser = appUser);
  }

  logout() {
    this.authService.logout();
  }

}
