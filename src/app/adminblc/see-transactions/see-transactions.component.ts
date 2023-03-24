import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-see-transactions',
  templateUrl: './see-transactions.component.html',
  styleUrls: ['./see-transactions.component.css']
})
export class SeeTransactionsComponent {
  startDate!: string;
  endDate!: string;
  transactionStats: any[] = [];

  constructor(private http: HttpClient) { }

  getTransactionStats() {
    const params = {
      startDate: this.startDate,
      endDate: this.endDate
    };
    this.http.get('/api/transaction-stats', { params }).subscribe(
      (data: any) => {
        this.transactionStats = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}



