import { Component } from '@angular/core';

@Component({
  selector: 'app-see-list-coaches',
  templateUrl: './see-list-coachs.component.html',
  styleUrls: ['./see-list-coachs.component.css']
})
export class SeeListCoachesComponent {
  coaches = [
    { name: 'Halim', email: 'halim@example.com', phone: '555-', expertise: '' },
    // add more coaches here...
  ];
}


