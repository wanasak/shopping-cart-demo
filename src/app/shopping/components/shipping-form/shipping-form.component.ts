import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {

  @Input('cart') cart: ShoppingCart;

  shipping: any = {};
  userId: string;
  userSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    const newOrder = new Order(
      this.userId,
      this.shipping,
      this.cart
    );

    const result = await this.orderService.storeOrder(newOrder);
    this.router.navigate(['/order-success', result.key]);
  }

}
