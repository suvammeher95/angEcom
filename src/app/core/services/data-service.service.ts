import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  availableProducts: Product[] = [
    {
      name: 'Sony Bravia 108 cm',
      description:
        'Resolution: 4K Ultra HD (3840 x 2160) | Refresh Rate: 60 Hertz | 178 Degree wide viewing angle',
      price: 43490,
      imageUrl: '../../../assets/images/tv-television.jpg',
    },
    {
      name: 'Redmi 80 cm',
      description:
        'Resolution: HD Ready (1366 x 768) | Refresh Rate: 60 hertz | 178 Degree wide viewing angle',
      price: 10999,
      imageUrl: '../../../assets/images/tv-television.jpg',
    },
    {
      name: 'Samsung 80 cm',
      description: 'Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz',
      price: 12990,
      imageUrl: '../../../assets/images/tv-television.jpg',
    },
  ];
  addedToCartProducts: Product[] = [
    { name: '', description: '', price: 0, imageUrl: '' },
  ];
  selectedProduct: Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  };
  constructor() {}
  getProducts() {
    return this.availableProducts;
  }
  getAddedToCartProducts() {
    this.addedToCartProducts.shift;
    return this.addedToCartProducts;
  }
  setSelectedProduct(selectedProdIndex: number) {
    this.selectedProduct = this.availableProducts[selectedProdIndex];
  }
  addToCart(product: Product) {
    this.addedToCartProducts.push(product);
  }
}
