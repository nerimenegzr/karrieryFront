import { Component } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent {
  name!: string;
  email!: string;

  updateProfile() {
    // TODO: Implement profile update logic here
  }
}

