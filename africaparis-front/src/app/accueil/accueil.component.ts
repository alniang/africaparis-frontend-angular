import { Component, OnInit } from '@angular/core';
import { Boutique } from '../common/data/boutique';
import { BoutiqueService } from '../common/service/boutique.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  info: any;
 
  constructor(private token: TokenStorageService) { }
 
  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
 
  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
