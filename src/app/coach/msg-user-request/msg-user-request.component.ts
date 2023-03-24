import { Component } from '@angular/core';

@Component({
  selector: 'app-msg-user-request',
  templateUrl: './msg-user-request.component.html',
  styleUrls: ['./msg-user-request.component.css']
})
export class MsgUserRequestComponent {
  message! : string;

  sendMessage() {
    // Logic to send message to user
  }
}



