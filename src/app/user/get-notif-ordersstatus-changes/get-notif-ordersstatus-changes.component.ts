import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { webSocket } from 'rxjs/webSocket'; 

@Component({
  selector: 'app-get-notif-ordersstatus-changes',
  templateUrl: './get-notif-ordersstatus-changes.component.html',
  styleUrls: ['./get-notif-ordersstatus-changes.component.css']
})
export class GetNotifOrdersstatusChangesComponent implements OnInit {
orders: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getOrders().subscribe((orders: any) => {
      orders.forEach((order: { id: number; }) => {
        this.subscribeToOrderChanges(order.id);
      });
    });
  }

  getOrders() {
    return this.http.get('api/orders');
  }
  subscribeToOrderChanges(orderId: number) {
    const wsUrl = `ws://api/orders/${orderId}/status`;
    const ws = webSocket(wsUrl);
  
    ws.subscribe(
      (data) => {
        // handle the notification for the order status change
      },
      (error) => {
        console.error(`WebSocket error: ${error}`);
      },
      () => {
        console.log(`WebSocket connection closed`);
      }
    );
  }
  on: any
  }


