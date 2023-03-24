import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-one-pack',
  templateUrl: './add-one-pack.component.html',
  styleUrls: ['./add-one-pack.component.css']
})
export class AddOnePackComponent {
  name: any;
  description: any;
  constructor(private http: HttpClient) {}

  // define any necessary properties and methods for the component here
onsubmit() {
  const pack = {
    name: this.name,
    description: this.description
  };

  this.http.post('/api/packs', pack).subscribe(_response => {
    console.log('Pack added successfully!');
  });
}
}
