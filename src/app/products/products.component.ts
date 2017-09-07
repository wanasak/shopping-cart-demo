import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

import 'rxjs/add/operator/switchMap';

/**
 * -- NOTES --
 *
 * await can be use in constrctor
 */

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  category: string;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  // categories$;
  cart: any;
  subscribtion: Subscription;

  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService) {

    // this.categories$ = categoryService.getCategories();

    productService.getAll()
      .switchMap(products => {
        this.products = products;
        return route.queryParamMap;
      })
      .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
    });
  }

  async ngOnInit() {
    this.subscribtion = (await this.shoppingCartService.getCart())
      .subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
