import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent {

  selectedFile: File = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  uploadResume() {
    const formData = new FormData();
    formData.append('resume', this.selectedFile, this.selectedFile.name);
    this.http.post('http://example.com/upload', formData)
      .subscribe(res => {
        console.log(res);
      });
  }

}


