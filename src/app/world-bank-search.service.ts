import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
  
export class WorldBankSearchService {
  constructor(private http: HttpClient) { }
  public search(id: string) {
    const url = `https://api.worldbank.org/v2/country/${id}?format=json`;
    return this.http.get(url);
  }
}
