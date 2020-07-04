import { Component, OnInit } from '@angular/core';
import { Boutique } from '../common/data/boutique';
import { BoutiqueService } from '../common/service/boutique.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  articles : Boutique[];

  constructor(public boutiqueService : BoutiqueService) { }

  ngOnInit(): void {
    this.boutiqueService.recupererArticle()
    .subscribe(
      article => {this.articles = article},
      error => {console.log(error)},
    )
  }

}
