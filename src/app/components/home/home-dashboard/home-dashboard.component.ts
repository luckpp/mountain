import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageTypes } from 'src/app/model/page-types.model';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(pageType: string) {
    this._router.navigateByUrl(`/${pageType}/dashboard`);
  }

}
