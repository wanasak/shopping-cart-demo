import { UserService } from './shared/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {
    authService.user$.subscribe(user => {
      // tslint:disable-next-line:curly
      if (!user) return;
      userService.save(user);

      const returnUrl = localStorage.getItem('returnUrl');
      // tslint:disable-next-line:curly
      if (!returnUrl) return;

      localStorage.removeItem('returnUrl');
      router.navigateByUrl(returnUrl);
    });
  }

}
