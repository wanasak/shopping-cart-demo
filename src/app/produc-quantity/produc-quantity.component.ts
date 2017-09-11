import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-produc-quantity',
  templateUrl: './produc-quantity.component.html',
  styleUrls: ['./produc-quantity.component.css']
})
export class ProducQuantityComponent {

  @Input('product') product: Product;
  @Input('showAction') showAction = true;
  @Input('shoppingCart') shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

  removeFromCart() {
    this.shoppingCartService.removeFromCart(this.product);
  }

}
