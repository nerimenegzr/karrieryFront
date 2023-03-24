import { Component } from '@angular/core';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent {
  currentPassword!: string;
  newPassword!: string;
  confirmPassword!: string;

  onSubmit() {
    // TODO: Add code to update the user's password
  }
}
