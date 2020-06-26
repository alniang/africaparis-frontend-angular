import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../common/service/evenement.service';
import { Evenement } from '../common/data/evenement';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.scss']
})
export class EvenementComponent implements OnInit {
  evenements : Evenement[];
  constructor(public evenementService : EvenementService) { }
  
  ngOnInit(): void {
    this.evenementService.recupererEvenement()
    .subscribe(
      evenement => {this.evenements = evenement},
      error => { console.log(error)}
    )
  }
}
