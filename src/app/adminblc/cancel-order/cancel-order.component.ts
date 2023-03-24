import { Component } from '@angular/core';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent {
  orders = [
    { id: 1, name: 'Order 1' },
    { id: 2, name: 'Order 2' },
    { id: 3, name: 'Order 3' },
    // Add more orders as needed
  ];

  onSubmit(form: any) {
    const orderId = form.order;
    // Call an API or service to cancel the order with the specified ID
  }
}

