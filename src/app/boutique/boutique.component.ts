import { Component, OnInit } from '@angular/core';
import { Boutique } from '../common/data/boutique';
import { BoutiqueService } from '../common/service/boutique.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {
  articles : Boutique[];
  config: any
  constructor(public boutiqueService : BoutiqueService, public router:Router, private route: ActivatedRoute) { 
    this.config = {
      currentPage: 1,
      itemsPerPage: 18,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page']?params['page']:1
    )
  }

  ngOnInit(): void {
    this.boutiqueService.recupererArticle()
    .subscribe(
      article => {this.articles = article , console.log(this.articles)},
      error => {console.log(error)},
    )
  }

  pageChange(newPage: number){
    this.router.navigate(['/boutique'], { queryParams: { page: newPage }});
  }
}