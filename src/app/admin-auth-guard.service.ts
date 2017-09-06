import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AdminAuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.authService.appUser$
      .map(appUser => appUser.isAdmin);
  }

}
