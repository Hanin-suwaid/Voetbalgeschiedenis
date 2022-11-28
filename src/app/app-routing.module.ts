import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {

path: 'navigation',
component: NavigationComponent 
},
{
  path: 'footer',
  component: FooterComponent
}, {
  path: 'home',
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
