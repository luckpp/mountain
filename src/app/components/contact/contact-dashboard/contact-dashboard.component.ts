import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.scss']
})
export class ContactDashboardComponent implements OnInit {

  members: any[];

  constructor() { }

  ngOnInit() {
    this.members = this.createMembers();
  }

  createMembers(): any[] {
    return [
      {
        name: 'Matesoane Adrian',
        position: 'Administrator',
        phone: '0735 666 053',
        email: 'amatesoane@gmail.com'
      },
      {
        name: 'Krubl Helmuth',
        position: 'Presedinte',
        email: '-',
        phone: '0734 660 485'
      },
      {
        name: 'Ebetiuc Gheorghe',
        position: 'Vicepresedinte',
        phone: '0722 842 643',
        email: 'gebetiuc@gmail.com'
      },
      {
        name: 'Schmelas Calin',
        position: '-',
        phone: '0740 107 906',
        email: 'schmelas@yahoo.com'
      },
      {
        name: 'Petrica Adrian',
        position: 'Vicepresedinte',
        phone: '0745 627 319',
        email: 'adipetrica@gmail.com'
      },
    ];
  }

}
