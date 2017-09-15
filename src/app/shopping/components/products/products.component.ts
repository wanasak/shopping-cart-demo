import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';

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
export class ProductsComponent implements OnInit {
  category: string;
  products: Product[] = [];
  filteredProducts: Product[] = [];
  // categories$;
  cart$: Observable<ShoppingCart>;
  subscribtion: Subscription;

  constructor(
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService) {
    // this.categories$ = categoryService.getCategories();
  }

  private applyFilter() {
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
  }

  private populateProducts() {
    this.productService.getAll()
      .switchMap(products => {
        this.products = products;
        return this.route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
  }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
    this.populateProducts();
  }

  trackById(index, item: Product) {
    return item.$key;
  }

}
