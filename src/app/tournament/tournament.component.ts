import { Component, OnInit } from '@angular/core';
import { WinnersService } from '../winners.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
year:any;
  constructor(private data: WinnersService) { }

  ngOnInit(): void {
    this.data.getTournament().subscribe(year => this.year = year)
    
  }

}
