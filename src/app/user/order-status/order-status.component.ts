import { HttpClient } from '@angular/common/http';

export class OrderStatusComponent {
  status!: string;
  
  constructor(private http: HttpClient) {}
  
  checkStatus() {
    const orderNumber = (document.getElementById('orderNumber') as HTMLInputElement).value;
    
    this.http.get(`https://your-api.com/orders/${orderNumber}`).subscribe(
      (response: any) => {
        this.status = response.status;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

