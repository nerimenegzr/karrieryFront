import { Component } from '@angular/core';

@Component({
  selector: 'app-see-orders',
  templateUrl: './see-orders.component.html',
  styleUrls: ['./see-orders.component.css']
})
export class SeeOrdersComponent {
  orders: string[] = ['Order 1', 'Order 2', 'Order 3'];
}
