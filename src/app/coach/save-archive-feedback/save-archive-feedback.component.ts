import { Component } from '@angular/core';

@Component({
  selector: 'app-seva-archive-feedback',
  templateUrl: './save-archive-feedback.component.html',
  styleUrls: ['./save-archive-feedback.component.css']
})
export class SaveArchiveFeedbackComponent {
  feedbackList = [
    {
      date: '2023',
      message: 'Great job on today\'s practice!'
    },
    {
      date: '2022-08-01',
      message: 'You need to work on your ball control.'
    },
    {
      date: '2022',
      message: 'You have improved a lot since we last met.'
    }
  ];
}
