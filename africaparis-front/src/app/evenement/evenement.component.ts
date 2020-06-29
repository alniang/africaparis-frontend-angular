import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../common/service/evenement.service';
import { Evenement } from '../common/data/evenement';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  evenements : Evenement[];
  evenement : Evenement;

  constructor(private route : ActivatedRoute,
              private router: Router, 
              public evenementService : EvenementService) { }
  
  ngOnInit(): void {
    this.evenementService.recupererEvenement()
    .subscribe(
      evenement => {this.evenements = evenement},
      error => { console.log(error)}
    )
  }

  getOne(){
    let id = this.route.snapshot.paramMap.get('id');
    this.evenementService.recupererEvenementById(id)
        .subscribe(evenement => {
          this.evenement = evenement
        })
  }

  selectEvenement(evenement : Evenement){
    console.log('Vous avez sélectionné ' + evenement.titre);
    let link = ['/evenement', evenement.id];
    this.getOne();
    this.router.navigate(link);
  }
}
