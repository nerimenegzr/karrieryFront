import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-be-user',
  templateUrl: './be-user.component.html',
  styleUrls: ['./be-user.component.css']
})
export class BeUserComponent {
  @Input()
  users!: any[];

  constructor(private http: HttpClient) {}

  banUser(userId: number) {
    this.http.post('/api/ban-user', { userId }).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }
}


