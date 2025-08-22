import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  id: string | null = null;
  product: Partial<Product> = {
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0
  };
  isEdit = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      const p = this.productService.getById(this.id);
      if (p) {
        this.product = { ...p };
        this.isEdit = true;
      } else {
        alert('Produit introuvable');
        this.router.navigate(['/products']);
      }
    }
  }

  save() {
    // Validation simple
    if (!this.product.name || !this.product.category) {
      alert('Nom et catégorie requis');
      return;
    }
    if (this.isEdit && this.id) {
      this.productService.update(this.id, this.product);
      alert('Produit modifié');
    } else {
      this.productService.create(this.product as Omit<Product,'id'>);
      alert('Produit ajouté');
    }
    this.router.navigate(['/products']);
  }
}