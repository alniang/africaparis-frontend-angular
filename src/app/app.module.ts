import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

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
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutEventsComponent } from './ajout-events/ajout-events.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EvenementComponent,
    AccueilComponent,
    BoutiqueComponent,
    BorderCardDirective,
    DetailsEvenementComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    AjoutEventsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
