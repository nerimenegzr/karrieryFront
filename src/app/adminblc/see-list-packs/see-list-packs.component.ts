import { Component } from '@angular/core';

@Component({
  selector: 'app-see-list-packs',
  templateUrl: './see-list-packs.component.html',
  styleUrls: ['./see-list-packs.component.css']
})
export class SeeListPacksComponent {
  packs = [
    {id: 1, name: 'Pack 1'},
    {id: 2, name: 'Pack 2'},
    {id: 3, name: 'Pack 3'},
  ];
}

