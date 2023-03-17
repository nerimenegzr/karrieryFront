import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-coach-myorder',
  templateUrl: './chat-coach-myorder.component.html',
  styleUrls: ['./chat-coach-myorder.component.css']
})
export class ChatCoachMyorderComponent {
  messages: string[] = [];

  constructor(private http: HttpClient) { }

  sendMessage(message: string) {
    // Send the message to the coach
    this.http.post('/api/sendMessage', { message }).subscribe(response => {
      // Add the message to the chat window
      this.messages.push();
    });
  }
}


