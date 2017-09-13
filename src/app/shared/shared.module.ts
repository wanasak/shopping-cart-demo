import { PaginationModule } from 'ngx-bootstrap/pagination';
import {CustomFormsModule} from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { ProducQuantityComponent } from './components/produc-quantity/produc-quantity.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    PaginationModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule
  ],
  declarations: [
    ProductCardComponent,
    ProducQuantityComponent
  ],
  exports: [
    ProductCardComponent,
    ProducQuantityComponent,
    CommonModule,
    FormsModule,
    NgbModule.forRoot().ngModule,
    PaginationModule.forRoot().ngModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
