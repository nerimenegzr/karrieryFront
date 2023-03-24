import { Component } from '@angular/core';

@Component({
  selector: 'app-see-list-agents',
  templateUrl: './see-list-agents.component.html',
  styleUrls: ['./see-list-agents.component.css']
})
export class SeeListAgentsComponent {
  agents = [
    { id: 1, name: 'Agent 1', email: 'agent1@example.com' },
    { id: 2, name: 'Agent 2', email: 'agent2@example.com' },
    { id: 3, name: 'Agent 3', email: 'agent3@example.com' },
  ];
}

