import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-admin',
  templateUrl: './chat-admin.component.html',
  styleUrls: ['./chat-admin.component.css']
})
export class ChatAdminComponent {
  messages: string[] = [];
  messageText: string = '';

  sendMessage() {
    if (this.messageText !== '') {
      this.messages.push(`Coach: ${this.messageText}`);
      this.messageText = '';
    }
  }
}

