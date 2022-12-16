import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WinnersService } from '../winners.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {
year:any;

  constructor(private data:WinnersService, private route:ActivatedRoute) { 
    this.route.params.subscribe(params => this.year = params['year']);
  
  }

  ngOnInit(): void {
    this.data.getTournament(this.year).subscribe(data => this.year = data);
  
  }

}
