import { Component } from '@angular/core';

@Component({
  selector: 'app-check-admin-profile',
  templateUrl: './check-admin-profil.component.html',
  styleUrls: ['./check-admin-profil.component.css']
})
export class CheckAdminProfileComponent {
  isAdminLoggedIn = true; // replace with your authentication logic
  adminId!: string;
  adminProfile: any;

  viewAdminProfile() {
    // replace with your logic to fetch the admin profile by ID
    this.adminProfile = {
      name: 'Halim',
      email: 'halim123@gmail.com',
      role: 'Admin'
    };
  }
}

