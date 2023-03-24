import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-resume',
  templateUrl: './upload-resume.component.html',
  styleUrls: ['./upload-resume.component.css']
})
export class UploadResumeComponent {

  selectedFile: File | null = null;
  FileSelected!: string | Blob;
  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }  
  uploadResume() {
    const formData = new FormData();
    formData.append('resume',this.FileSelected);
    this.http.post('http://example.com/upload', formData)
      .subscribe(res => {
        console.log(res);
      });
  }

}


