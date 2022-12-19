import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WinnersService } from '../winners.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
matchid:any;
  constructor(private data:WinnersService, private route:ActivatedRoute) {
    this.route.params.subscribe(params => this.matchid = params['matchid']);
   }

  ngOnInit(): void {
    this.data.getAllPlayersbyMatch(this.matchid).subscribe(data => this.matchid = data);
   

  }

}
