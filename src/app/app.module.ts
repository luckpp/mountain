import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './components/home/home-dashboard/home-dashboard.component';
import { GalleryDashboardComponent } from './components/gallery/gallery-dashboard/gallery-dashboard.component';
import { StructureDashboardComponent } from './components/structure/structure-dashboard/structure-dashboard.component';
import { ContactDashboardComponent } from './components/contact/contact-dashboard/contact-dashboard.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { BigButtonComponent } from './components/misc/big-button/big-button.component';
import { AboutDashboardComponent } from './components/about/about-dashboard/about-dashboard.component';
import { EventsDashboardComponent } from './components/events/events-dashboard/events-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    GalleryDashboardComponent,
    StructureDashboardComponent,
    ContactDashboardComponent,
    MenuComponent,
    BigButtonComponent,
    AboutDashboardComponent,
    EventsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
