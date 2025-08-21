import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.products = this.productService.getAll();
  }

  deleteProduct(id: string) {
    if (confirm('Confirmer la suppression ?')) {
      this.productService.remove(id);
      this.loadProducts();
    }
  }

  editProduct(id: string) {
    this.router.navigate(['/products/edit', id]);
  }

  viewProduct(id: string) {
    this.router.navigate(['/products', id]);
  }
}
