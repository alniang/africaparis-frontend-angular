import { Injectable } from '@angular/core';
import { Evenement } from '../data/evenement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  public recupererEvenement() : Observable<Evenement[]>{
    let url = "./events-api/public/events";
    return this.http.get<Evenement[]>(url);
  }
  constructor(private http: HttpClient) { }
}
