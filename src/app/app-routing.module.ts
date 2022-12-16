import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { TournamentComponent } from "./tournament/tournament.component";
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  
  {

path: 'navigation',
component: NavigationComponent 
},
{
  path: 'footer',
  component: FooterComponent
},
{
  path: '',
  component: HomeComponent
},
{
  path: 'tournament/:year',
  component: TournamentComponent
},
{
path: 'team/:matchid',
component: TeamComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
