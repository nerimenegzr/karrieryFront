import { Component } from '@angular/core';

@Component({
  selector: 'app-see-list-agents-pay',
  templateUrl: './see-list-agents-pay.component.html',
  styleUrls: ['./see-list-agents-pay.component.css']
})
export class SeeListAgentsPayComponent {
  agents: string[] = ['Agent A', 'Agent B', 'Agent C'];

  payAgent(agent: string) {
    console.log('Paying ' + agent + ' in cash.');
  }
}




