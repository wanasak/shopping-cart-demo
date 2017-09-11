import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {

  orders$;

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {
    this.orders$ = authService.user$.switchMap(user => orderService.getOrdersByUser(user.uid));
  }

}
