import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: Product[] = [{ name: '', description: '', price: 0, imageUrl: '' }];
  cartTotal: number = 0;
  constructor(private dataService: DataServiceService) {}
  ngOnInit() {
    this.products.shift();
    this.products = this.dataService.getAddedToCartProducts();
    this.cartTotal = this.products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
  }
}
