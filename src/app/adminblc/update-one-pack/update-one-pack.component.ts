import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-one-pack',
  templateUrl: './update-one-pack.component.html',
  styleUrls: ['./update-one-pack.component.css']
})
export class UpdateOnePackComponent {
  packForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.packForm = this.fb.group({
      name: [''],
      description: [''],
      price: ['']
    });
  }

  onSubmit() {
    const formData = this.packForm.value;
    // TODO: Call a service to update the pack using the formData
  }
}
