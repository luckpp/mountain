import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './components/home/home-dashboard/home-dashboard.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeDashboardComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
