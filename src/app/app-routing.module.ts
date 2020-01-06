import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDashboardComponent } from './components/home/home-dashboard/home-dashboard.component';
import { AboutDashboardComponent } from './components/about/about-dashboard/about-dashboard.component';
import { EventsDashboardComponent } from './components/events/events-dashboard/events-dashboard.component';
import { GalleryDashboardComponent } from './components/gallery/gallery-dashboard/gallery-dashboard.component';
import { StructureDashboardComponent } from './components/structure/structure-dashboard/structure-dashboard.component';
import { ContactDashboardComponent } from './components/contact/contact-dashboard/contact-dashboard.component';


const routes: Routes = [
  {
    path: 'home',
    children: [
      {
        path: 'dashboard',
        component: HomeDashboardComponent
      }
    ]
  },
  {
    path: 'about',
    children: [
      {
        path: 'dashboard',
        component: AboutDashboardComponent
      }
    ]
  },
  {
    path: 'events',
    children: [
      {
        path: 'dashboard',
        component: EventsDashboardComponent
      }
    ]
  },
  {
    path: 'gallery',
    children: [
      {
        path: 'dashboard',
        component: GalleryDashboardComponent
      }
    ]
  },
  {
    path: 'structure',
    children: [
      {
        path: 'dashboard',
        component: StructureDashboardComponent
      }
    ]
  },
  {
    path: 'contact',
    children: [
      {
        path: 'dashboard',
        component: ContactDashboardComponent
      }
    ]
  },
  { 
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
