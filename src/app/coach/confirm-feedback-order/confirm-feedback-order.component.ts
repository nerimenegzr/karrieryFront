import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-feedback-order',
  templateUrl: './confirm-feedback-order.component.html',
  styleUrls: ['./confirm-feedback-order.component.css']
})
export class ConfirmFeedbackOrderComponent {
  @Input() orderId!: string;
  @Input() feedback!: string;
  feedbackService: any;

  confirmFeedback() {
    this.feedbackService.confirmFeedback(this.orderId, this.feedback).subscribe(
      (      _response: any) => {
        console.log(`Feedback for order ${this.orderId} confirmed`);
        // TODO: handle success response
      },
      (      error: any) => {
        console.error(`Error confirming feedback for order ${this.orderId}: ${error}`);
        // TODO: handle error response
      }
    );
  }
}



