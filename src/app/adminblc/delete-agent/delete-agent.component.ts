import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.css']
})
export class DeleteAgentComponent {

  constructor(private http: HttpClient) { }

  deleteAgent() {
    this.http.delete('/api/agents/agent-id').subscribe(_response => {
      console.log('Agent deleted successfully');
    });
  }

}

