import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './core/admin/admin.component';
import { ProductComponent } from './core/product/product.component';
import { CartComponent } from './core/cart/cart.component';
import { Route, RouterModule } from '@angular/router';

const allRoutes: Route[] = [
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  declarations: [AppComponent, AdminComponent, ProductComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(allRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
