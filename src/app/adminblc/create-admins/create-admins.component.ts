import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-admins',
  templateUrl: './create-admins.component.html',
  styleUrls: ['./create-admins.component.css']
})
export class CreateAdminsComponent {
  adminForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.adminForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    // Add code to create a new admin using the form data
  }
}

