import { Product } from './product.model';

export class Cart {
  products: Product[] = [{ name: '', description: '', price: 0, imageUrl: '' }];
  total: number = 0;
}
