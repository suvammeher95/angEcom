import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './core/admin/admin.component';
import { ProductComponent } from './core/product/product.component';
import { CartComponent } from './core/cart/cart.component';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FormsModule } from '@angular/forms';
import { ApplyDiscountPipe } from './core/pipes/apply-discount.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './core/auth/auth.component';
const allRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ProductComponent,
    CartComponent,
    HomeComponent,
    ApplyDiscountPipe,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allRoutes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
