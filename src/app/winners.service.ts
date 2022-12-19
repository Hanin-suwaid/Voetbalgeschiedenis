import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  constructor(private http: HttpClient, private route:ActivatedRoute) { 
    
  }
  getWinners(){
    return this.http.get('https://k0497.azurewebsites.net/api/years/getallyears');
  }
  getTournament(year:any){
    return this.http.get('https://k0497.azurewebsites.net/api/matches/getallmatchesbyyear?type=json&year='+year)
  }

  getAllPlayersbyMatch(matchid:any){
    return this.http.get('https://k0497.azurewebsites.net/api/players/getallplayersbymatch?type=json&matchid='+matchid)
  }
}
