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

  constructor(private route : ActivatedRoute, 
              private router : Router,
              private evenementService : EvenementService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.evenementService.recupererEvenementById(id)
        .subscribe(evenement => {
          this.evenement = evenement
        })
  }

  goBack() : void {
    this.router.navigate(['/evenement'])
  }

}