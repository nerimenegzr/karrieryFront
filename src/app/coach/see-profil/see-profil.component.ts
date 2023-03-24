import { Component } from '@angular/core';

interface Coach {
  name: string;
  email: string;
}

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profil.component.html',
  styleUrls: ['./see-profil.component.css']
})
export class SeeProfilComponent {
  coach: Coach = { 
    name: '',
    email: ''
  };
}


