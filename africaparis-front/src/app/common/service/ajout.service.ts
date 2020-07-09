import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evenement } from '../data/evenement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjoutService {
  private _headers = new HttpHeaders({'Content-Type': 'application/json'});

  public ajouterUnEvenement(evenement : Evenement) : Observable<Evenement>{
    let url = "http://localhost:9002/events/events-api/public/user/events"
    return this.http.post<Evenement>(url, evenement, {headers : this._headers});
  }

  constructor(private http : HttpClient) { }
}
