import { Injectable } from '@angular/core';
import { Evenement } from '../data/evenement';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  
  public recupererEvenement() : Observable<Evenement[]>{
    let url = "https://africaparis-evenements.herokuapp.com/events/events-api/public/user/events";
    return this.http.get<Evenement[]>(url);
  }

  public recupererEvenementById(id : string) : Observable<Evenement>{
    let url = "https://africaparis-evenements.herokuapp.com/events/events-api/public/user/events" + id;
    return this.http.get<Evenement>(url);
  }

  public ajoutEvenement(evenement : Evenement) : Observable<Evenement>{
    let url = "https://africaparis-evenements.herokuapp.com/events/events-api/public/user/events";
    return this.http.post<Evenement>(url, evenement, {headers: this._headers});
  }
}
