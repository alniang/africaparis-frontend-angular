import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
import { EvenementComponent } from './evenement/evenement.component';
import { BoutiqueComponent } from './boutique/boutique.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'evenement', component: EvenementComponent },
  { path: 'boutique', component: BoutiqueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
