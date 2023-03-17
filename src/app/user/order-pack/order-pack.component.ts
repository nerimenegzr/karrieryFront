import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-pack',
  templateUrl: './order-pack.component.html',
  styleUrls: ['./order-pack.component.css']
})
export class OrderPackComponent {
  constructor(private http: HttpClient) {}

  onSubmit(formData: any) {
    const orderData = {
      name: formData.name,
      email: formData.email,
      pack: formData.pack
    };

    this.http.post('/api/orders', orderData).subscribe(
      _response => {
        console.log('Order placed successfully!');
      },
      error => {
        console.error('Error placing order:', error);
      }
    );
  }
}

