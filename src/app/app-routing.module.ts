import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';
import { TournamentInfoComponent } from './tournament-info/tournament-info.component';

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
  path: 'home',
  component:HomeComponent
},
{
  path: 'winner/:year',
  component:TournamentInfoComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
