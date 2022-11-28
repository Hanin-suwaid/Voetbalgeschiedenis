import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  constructor(private http: HttpClient) { }
  getWinners(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
}
