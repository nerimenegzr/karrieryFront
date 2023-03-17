import { Component } from '@angular/core';

@Component({
  selector: 'app-pick-method-payment',
  templateUrl: './pick-method-payment.component.html',
  styleUrls: ['./pick-method-payment.component.css']
})
export class PickMethodPaymentComponent {
  selectedPaymentMethod!: string;

  onSelectPaymentMethod(paymentMethod: string): void {
    this.selectedPaymentMethod = paymentMethod;
  }
}





