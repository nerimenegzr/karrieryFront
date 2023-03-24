import { Component } from '@angular/core';

interface Coach {
  name: string;
  id: number;
}

@Component({
  selector: 'app-be-coach',
  templateUrl: './be-coach.component.html',
  styleUrls: ['./be-coach.component.css']
})
export class BeCoachComponent {
  isAdmin = true; // replace with your own logic for checking if user is an admin
  coaches: Coach[] = [
    { name: 'Coach A', id: 1 },
    { name: 'Coach B', id: 2 },
    { name: 'Coach C', id: 3 },
    { name: 'Coach D', id: 4 },
  ];
  selectedCoach!: Coach;

  banCoach() {
    // Replace this function with your own logic for banning coaches
    console.log('Banning coach:', this.selectedCoach.name);
  }
}

