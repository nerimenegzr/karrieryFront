import { Component } from '@angular/core';

@Component({
  selector: 'app-do-everything',
  templateUrl: './do-everything.component.html',
  styleUrls: ['./do-everything.component.css']
})
export class DoEverythingComponent {
  isSuperAdmin: boolean = true;

  constructor() { }

  canDoEverything(): boolean {
    // Add your logic here to check if the user is a super admin
    // Return true if the user is a super admin, false otherwise
    return this.isSuperAdmin;
  }
}

