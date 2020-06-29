import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EvenementComponent } from './evenement/evenement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailsEvenementComponent } from './details-evenement/details-evenement.component';
import { EvenementService } from './common/service/evenement.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EvenementComponent,
    AccueilComponent,
    BoutiqueComponent,
    BorderCardDirective,
    DetailsEvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EvenementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
