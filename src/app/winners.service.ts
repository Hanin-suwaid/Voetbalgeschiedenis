import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  constructor(private http: HttpClient, private route:ActivatedRoute) { }
  getWinners(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
  getTournament(){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatches');
  }
}
