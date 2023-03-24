import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-one-order-work-on',
  templateUrl: './pick-one-order-work-on.component.html',
  styleUrls: ['./pick-one-order-work-on.component.css']
})
export class PickOneOrderWorkOnComponent implements OnInit {
  orders = [
    { id: 1, name: 'Order 1' },
    { id: 2, name: 'Order 2' },
    { id: 3, name: 'Order 3' },
  ];

  selectedOrder: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectOrder(order: any) {
    this.selectedOrder = order;
    console.log(`Selected order: ${order.name}`);
  }
}
