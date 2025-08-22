import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container mt-5 mb-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg border-0">
            <div class="card-body text-center bg-light">
              <h2 class="fw-bold text-primary mb-3">
                <i class="bi bi-box-seam"></i> Bienvenue !
              </h2>
              <h5 class="card-title mb-3">Application de gestion des produits</h5>
              <p class="card-text fs-5 mb-4">
                Gère ton catalogue&nbsp;: <span class="text-success">ajouter</span>, <span class="text-warning">modifier</span>, <span class="text-danger">supprimer</span> et <span class="text-info">consulter</span> les produits.
              </p>
              <a class="btn btn-success btn-lg px-4" routerLink="/products">
                <i class="bi bi-list-ul"></i> Voir la liste des produits
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent {}