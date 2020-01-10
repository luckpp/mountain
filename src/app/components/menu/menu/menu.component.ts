import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MenuComponent implements OnInit {

  @Output() showVericalMenuChanged: EventEmitter<boolean>;

  verticalMenuVisible: boolean;

  constructor(
    private _router: Router
  ) { 
    this.showVericalMenuChanged = new EventEmitter<boolean>();
    this.verticalMenuVisible = false;
  }

  ngOnInit() {
  }

  navigateTo(pageType: string) {
    this._router.navigateByUrl(`/${pageType}/dashboard`);
  }

  vericalNavigateTo(pageType: string) {
    this.navigateTo(pageType);
    this.verticalMenuVisible = false;
  }

  showVericalMenuClicked() {
    this.verticalMenuVisible = !this.verticalMenuVisible;
    this.showVericalMenuChanged.emit(this.verticalMenuVisible);
  }

  onResize(event){
    if (event.target.innerWidth > 770) {
      if (this.verticalMenuVisible) {
        this.verticalMenuVisible = false;
      }
    }
  }
}
