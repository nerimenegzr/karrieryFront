import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-see-list-admins',
  templateUrl: './see-list-admins.component.html',
  styleUrls: ['./see-list-admins.component.css']
})
export class SeeListAdminsComponent {
  admins!: any[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllAdmins().subscribe((admins: any) => {
      this.admins = admins;
    });
  }
}
