import { Component } from '@angular/core';
import SimplePeer from 'simple-peer';

@Component({
  selector: 'app-video-chat-coach-myorder',
  templateUrl: './video-chat-coach-myorder.component.html',
  styleUrls: ['./video-chat-coach-myorder.component.css']
})
export class VideoChatCoachMyorderComponent {
  private peer: SimplePeer.Instance;

  constructor() {
    // Initialize SimplePeer object
    this.peer = new SimplePeer({ initiator: true });

    // Set up video chat connection
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        // Display local video stream
        const localVideo = document.querySelector('#localVideo') as HTMLVideoElement;
        localVideo.srcObject = stream;

        // Connect to remote video stream
        this.peer.on('signal', data => {
          // Send signal data to coach
        });

        this.peer.on('stream', stream => {
          // Display remote video stream
          const remoteVideo = document.querySelector('#remoteVideo') as HTMLVideoElement;
          remoteVideo.srcObject = stream;
        });
      })
      .catch(error => {
        console.error('Error accessing media devices:', error);
      });
  }
}


