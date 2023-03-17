import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-check-feedback-mycoach',
  templateUrl: './check-feedback-mycoach.component.html',
  styleUrls: ['./check-feedback-mycoach.component.css']
})
export class CheckFeedbackMycoachComponent implements OnInit {
  feedbackData: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Make API call to fetch feedback data
    this.http.get('/api/feedback/mycoach').subscribe((data: any) => {
      this.feedbackData = data;
    });
  }

}

