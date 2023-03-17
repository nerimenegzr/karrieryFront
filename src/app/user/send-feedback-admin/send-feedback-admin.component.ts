import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-send-feedback-admin',
  templateUrl: './send-feedback-admin.component.html',
  styleUrls: ['./send-feedback-admin.component.css']
})
export class SendFeedbackAdminComponent {
  feedback: string | undefined;
  @Output() feedbackSent = new EventEmitter<string>();

  sendFeedback() {
    this.feedbackSent.emit(this.feedback);
    this.feedback = '';
  }
}






