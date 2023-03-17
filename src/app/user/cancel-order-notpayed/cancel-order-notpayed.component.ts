import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cancel-order-notpayed',
  templateUrl: './cancel-order-notpayed.component.html',
  styleUrls: ['./cancel-order-notpayed.component.css']
})
export class CancelOrderNotpayedComponent {

  @Input() orderId!: number;

  constructor() { }

  cancelOrder() {
    // Implement logic to cancel the order if it's not already paid
    console.log('Order with ID', this.orderId, 'has been cancelled.');
  }
}
