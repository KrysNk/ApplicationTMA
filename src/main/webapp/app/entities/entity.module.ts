import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'commande',
        loadChildren: () => import('./commande/commande.module').then(m => m.ApplicationTmaCommandeModule)
      },
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ApplicationTmaClientModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class ApplicationTmaEntityModule {}
