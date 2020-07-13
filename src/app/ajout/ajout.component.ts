import { Component, OnInit, Input } from '@angular/core';
import { Evenement } from '../common/data/evenement';
import { AjoutService } from '../common/service/ajout.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EvenementService } from '../common/service/evenement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  evenement : Evenement ;

  constructor(private evenementService : EvenementService, private router : Router) { }

  onAjoutEvenement(){
    // this.evenementService.ajoutEvenement(this.evenement)
    // .subscribe(
    //   evenement => {this.evenement = evenement ,
    //                 console.log(JSON.stringify(evenement)),
    //                 this.onRedirige() 
    //                },
    //   error => {console.log(error)}
    // )
    this.evenementService.ajoutEvenement(this.evenement),
    this.onRedirige()
  }
  onRedirige(){
    this.router.navigate(['/accueil']);
  }

  ngOnInit(): void { }

}
