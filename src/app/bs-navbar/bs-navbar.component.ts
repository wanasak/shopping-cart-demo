import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser: AppUser;
  // shoppingCartItemsCount: number;
  cart$: Observable<ShoppingCart>;

  constructor(
    private shoppingCartServiec: ShoppingCartService,
    private authService: AuthService
  ) { }

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.shoppingCartServiec.getCart();
    // cart$.subscribe(cart => {
    //   this.shoppingCartItemsCount = 0;
    //   // tslint:disable-next-line:forin
    //   for (const productId in cart.items) {
    //    this.shoppingCartItemsCount += cart.items[productId].quantity;
    //   }
    // });
  }

  logout() {
    this.authService.logout();
  }

}
