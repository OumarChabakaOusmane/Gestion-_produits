import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  <div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">Bienvenue dans l'application de gestion des produits</h5>
      <p class="card-text">Gère ton catalogue: ajouter, modifier, supprimer et consulter les produits.</p>
      <a class="btn btn-primary" routerLink="/products">Voir la liste des produits</a>
    </div>
  </div>
  `
})
export class DashboardComponent {}
