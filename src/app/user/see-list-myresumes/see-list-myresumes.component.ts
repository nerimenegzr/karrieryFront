import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-see-list-myresumes',
  templateUrl: './see-list-myresumes.component.html',
  styleUrls: ['./see-list-myresumes.component.css']
})
export class SeeListMyresumesComponent implements OnInit {
  resumes: any[] = []; // array to hold user's resumes

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // fetch user's resumes from API
    this.http.get('https://my-api.com/resumes').subscribe((res: any) => {
      this.resumes = res;
    });
  }

}


