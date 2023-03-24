import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-user-profile',
  templateUrl: './chec-user-profil.component.html',
  styleUrls: ['./chec-user-profil.component.css']
})
export class CheckUserProfileComponent {
  @Input()
  userId!: number;
}

