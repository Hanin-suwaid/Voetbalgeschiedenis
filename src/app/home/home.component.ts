import { Component,OnInit } from '@angular/core';
import { WinnersService } from '../winners.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Land:any;
  constructor(private winners: WinnersService) { }
  ngOnInit(): void {
    this.winners.getWinners().subscribe(winners => this.Land = winners);
  }


}
