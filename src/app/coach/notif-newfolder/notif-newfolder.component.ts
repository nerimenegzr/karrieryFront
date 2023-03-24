import { Component } from '@angular/core';

@Component({
  selector: 'app-notif-newfolder',
  templateUrl: './notif-newfolder.component.html',
  styleUrls: ['./notif-newfolder.component.css']
})
export class NotifNewfolderComponent {
  newOrder: boolean = false;

  constructor() {
    this.checkForNewOrder();
  }

  checkForNewOrder() {
    // TODO: Implement logic to check for new order
    // If a new order is detected, set this.newOrder to true
  }
}


