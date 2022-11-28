import { Component } from '@angular/core';
import { WinnersService } from "../winners.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  winners:any;
  constructor(private data:WinnersService){}
  ngOnInit(): void{
    this.data.getWinners().subscribe(data => this.winners = data)
  }

}
