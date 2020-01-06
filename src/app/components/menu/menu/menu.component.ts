import { Component, OnInit } from '@angular/core';
import { PageTypes } from '../../../model/page-types.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(pageType: PageTypes) {
    this._router.navigateByUrl(`/${pageType}/dashboard`);
  }
}
