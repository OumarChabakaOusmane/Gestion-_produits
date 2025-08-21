import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private storageKey = 'products_store_v1';
  private products: Product[] = [];

  constructor() {
    this.load();
  }

  private generateId(): string {
    return Date.now().toString() + '-' + Math.floor(Math.random() * 1000);
  }

  private load() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.products = JSON.parse(data);
    } else {
      this.seed();
    }
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.products));
  }

  private seed() {
    this.products = [
      { id: this.generateId(), name: 'Clavier mécanique', description: 'Switchs bleus, RGB', price: 5000, category: 'Informatique', stock: 25 },
      { id: this.generateId(), name: 'Casque Bluetooth', description: 'Réduction de bruit', price: 1250, category: 'Audio', stock: 12 },
      { id: this.generateId(), name: 'Lampe LED', description: 'Bureau, 3 modes', price: 1500, category: 'Maison', stock: 50 }
    ];
    this.save();
  }

  getAll(): Product[] {
    return this.products;
  }

  getById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct: Product = { id: this.generateId(), ...product };
    this.products.push(newProduct);
    this.save();
    return newProduct;
  }

  update(id: string, changes: Partial<Product>): Product | undefined {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...changes };
      this.save();
      return this.products[index];
    }
    return undefined;
  }

  remove(id: string): void {
    this.products = this.products.filter(p => p.id !== id);
    this.save();
  }
}
