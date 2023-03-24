import { Component } from '@angular/core';

@Component({
  selector: 'app-see-list-requests',
  templateUrl: './see-list-requests.component.html',
  styleUrls: ['./see-list-requests.component.css']
})
export class SeeListRequestsComponent {
  requests = [
    { id: 1, name: 'Request 1', status: 'Pending' },
    { id: 2, name: 'Request 2', status: 'Approved' },
    { id: 3, name: 'Request 3', status: 'Rejected' }
  ];
}

