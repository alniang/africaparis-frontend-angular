import { Component, OnInit } from '@angular/core';
import { Boutique } from '../common/data/boutique';
import { BoutiqueService } from '../common/service/boutique.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
  articles : Boutique[];
  constructor(public boutiqueService : BoutiqueService) { }

  ngOnInit(): void {
    this.boutiqueService.recupererArticle()
    .subscribe(
      article => {this.articles = article , console.log(this.articles)},
      error => {console.log(error)}
    )
  }
}
