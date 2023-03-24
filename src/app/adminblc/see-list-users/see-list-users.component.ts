import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-see-list-users',
  templateUrl: './see-list-users.component.html',
  styleUrls: ['./see-list-users.component.css']
})
export class SeeListUsersComponent implements OnInit {
  users!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get<any[]>('/api/users').subscribe(users => {
      this.users = users;
    });
  }
}

