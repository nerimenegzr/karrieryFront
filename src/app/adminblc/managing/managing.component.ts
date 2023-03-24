import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-managing',
  templateUrl: './managing.component.html',
  styleUrls: ['./managing.component.css']
})
export class ManagingComponent {
  email!: string;
  password!: string;
  permissions!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const data = {
      email: this.email,
      password: this.password,
      permissions: this.permissions
    };
    this.http.post('/api/admins', data).subscribe(response => {
      console.log('New admin created:', response);
    });
  }
}

