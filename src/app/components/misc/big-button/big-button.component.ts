import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.scss']
})
export class BigButtonComponent implements OnInit {

  @Input() content: string; 

  constructor() { }

  ngOnInit() {
  }

}
