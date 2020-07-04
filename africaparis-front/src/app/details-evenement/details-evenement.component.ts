import { Component, OnInit } from '@angular/core';
import { Evenement } from '../common/data/evenement';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from '../common/service/evenement.service';

@Component({
  selector: 'app-details-evenement',
  templateUrl: './details-evenement.component.html',
  styleUrls: ['./details-evenement.component.scss']
})
export class DetailsEvenementComponent implements OnInit {

  evenement : Evenement = null;
  idEvenement = sessionStorage.getItem("id");

  constructor(private route : ActivatedRoute, 
              private router : Router,
              private evenementService : EvenementService) { }

  ngOnInit(): void {
    this.recupererEvenement(this.idEvenement)
  }

  recupererEvenement(id) {
    this.evenementService.recupererEvenementById(id).subscribe(
        data => { this.evenement = data;}
    )
  }

  goBack() : void {
    this.router.navigate(['/evenement'])
  }

}