import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-with-coach',
  templateUrl: './chat-with-coach.component.html',
  styleUrls: ['./chat-with-coach.component.css']
})
export class ChatWithCoachComponent {
  messages: string[] = [];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push(this.newMessage);
      this.newMessage = '';
    }
  }
}

