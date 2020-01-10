import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mountain';

  showVericalMenuHandler(status: boolean) {
    console.log(`showVericalMenuHandler(${status})`);
  }
}
