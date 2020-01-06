import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-dashboard',
  templateUrl: './about-dashboard.component.html',
  styleUrls: ['./about-dashboard.component.scss']
})
export class AboutDashboardComponent implements OnInit {

  activities: string[];

  constructor() {
    this.activities = this.createActivities()
  }

  ngOnInit() {
  }

  private createActivities(): string[] {
    return [
      'În fiecare an, în perioada vacanţelor şcolare de iarnă, tabere de schi.',
      'Concursul de schi Cupa Prietenii Munţilor.',
      'Concursul de schi Cupa de Vest-Ghiţă Bologa.',
      'Acţiuni de ecologizare.',
      'Ture prin munţii noştrii.',
      'Ture cu bicicletele prin munţii noştrii.'
    ]
  }

}
