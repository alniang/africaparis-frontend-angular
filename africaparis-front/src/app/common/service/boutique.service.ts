import { Injectable } from '@angular/core';
import { Boutique } from '../data/boutique';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  public recupererArticle() : Observable<Boutique[]> {
    let url = "./boutique/boutique-api/public/articles";
    return this.http.get<Boutique[]>(url);
  }

  constructor(private http : HttpClient) { }
}
