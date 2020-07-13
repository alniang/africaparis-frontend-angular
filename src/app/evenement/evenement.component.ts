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
  idEvenement : string;

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

  recupererEvenementById(evenement){
    console.log(JSON.stringify(evenement))
    console.log("id recupéré = " + evenement.id)
    this.idEvenement = evenement.id;
    sessionStorage.setItem("id", this.idEvenement);
    this.router.navigate(['/evenement', this.idEvenement]);
  }
}
