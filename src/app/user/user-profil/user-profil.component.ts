import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telephone: [''],
    password: ['', Validators.required],
    pack: ['basic'],
    address: [''],
    postalCode: [''],
    state: [''],
    education: [''],
    work: [''],
    country: ['']
  });
  userService: any;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // Handle form submission
  }

  onUpdate() {
    // Get updated profile information from the form
    const updatedProfile = this.profileForm.value;

    // Call API to update user's profile
    // Replace this with your own API endpoint
    this.userService.updateUserProfile(updatedProfile).subscribe(
      (response: any) => {
        console.log('Profile updated successfully!');
      },
      (error: any) => {
        console.error('Error updating profile:', error);
      }
    );
  }
}
