import { Component } from '@angular/core';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent {
  
  addAgent(_name: string, _email: string, _phone: string) {
    // Code to add agent to database/API goes here
  }

}

