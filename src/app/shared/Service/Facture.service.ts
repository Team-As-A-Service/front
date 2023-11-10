import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  readonly API_URL = `${environment.API_URL}/SpringMVC/facture`;

  constructor(private httpClient: HttpClient) { }

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-factures`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${this.API_URL}/add-facture`, facture)
  }
}
