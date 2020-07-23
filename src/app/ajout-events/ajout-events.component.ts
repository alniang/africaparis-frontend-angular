import { Component, OnInit } from '@angular/core';
import { Evenement } from '../common/data/evenement';
import { EvenementService } from '../common/service/evenement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-events',
  templateUrl: './ajout-events.component.html',
  styleUrls: ['./ajout-events.component.scss']
})
export class AjoutEventsComponent implements OnInit {

  evenement : Evenement

  submitted = false;

  constructor(private evenementService : EvenementService, private router : Router) { 
    this.evenement = new Evenement()
  }

  onSubmit(){this.submitted = true;
    console.log(JSON.stringify("=================" + this.evenement.titre))
    this.evenement.id = this.evenement.titre + Date.now()
    console.log(this.evenement.id)
    this.evenementService.ajoutEvenement(this.evenement)
    .subscribe(
        () => {
                      console.log(JSON.stringify(this.evenement))              
                     }
    )
    this.onRedirige()
  }

  onRedirige(){
    this.router.navigate(['/evenement']);
  }

  ngOnInit(): void {
  }

}
