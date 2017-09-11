import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-card-summary',
  templateUrl: './shopping-card-summary.component.html',
  styleUrls: ['./shopping-card-summary.component.css']
})
export class ShoppingCardSummaryComponent {

  @Input('cart') cart: ShoppingCart;

  constructor() { }

}
