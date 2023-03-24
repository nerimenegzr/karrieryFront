import { Component } from '@angular/core';

@Component({
  selector: 'app-see-mybalance',
  templateUrl: './see-mybalance.component.html',
  styleUrls: ['./see-mybalance.component.css']
})
export class SeeMybalanceComponent {
  balance: number = 1000; // replace with your actual balance
}
