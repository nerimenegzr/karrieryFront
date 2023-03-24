import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-authanti-new-order-add',
  templateUrl: './authanti-new-order-add.component.html',
  styleUrls: ['./authanti-new-order-add.component.css']
})
export class AuthantiNewOrderAddComponent {
  newOrder = {
    name: '',
    quantity: 0
  };

  constructor(private http: HttpClient) { }

  addNewOrder() {
    this.http.post('/api/orders', this.newOrder).subscribe(() => {
      // Send notification to admin that new order has been added
    });
  }
}

