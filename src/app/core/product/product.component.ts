import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  products: Product[] = [{ name: '', description: '', price: 0, imageUrl: '' }];
  selectedProduct: Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  };
  selectedProductIndex: number = -1;
  constructor(private dataService: DataServiceService) {}
  ngOnInit() {
    this.products.shift();
    this.products = this.dataService.getProducts();
  }
  onProductSelect(selectedProdIndex: number) {
    this.selectedProduct = this.products[selectedProdIndex];
    this.selectedProductIndex = selectedProdIndex;
  }
  onAddToCart() {
    this.dataService.addToCart(this.selectedProduct);
  }
}
