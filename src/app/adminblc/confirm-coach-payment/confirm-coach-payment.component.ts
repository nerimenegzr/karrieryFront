import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-coach-payment',
  templateUrl: './confirm-coach-payment.component.html',
  styleUrls: ['./confirm-coach-payment.component.css']
})
export class ConfirmCoachPaymentComponent {
  @Input()
  coachName!: string;
  @Input()
  paymentAmount!: number;

  confirmPayment() {
    // Add your code to confirm the coach payment here
  }
}
