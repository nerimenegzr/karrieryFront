import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-see-payed-request',
  templateUrl: './see-payed-request.component.html',
  styleUrls: ['./see-payed-request.component.css']
})
export class SeePayedRequestComponent implements OnInit {

  PayedRequests!: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('/api/payed-requests')
      .subscribe(data => {
        this.PayedRequests = data;
      });
  }

}

