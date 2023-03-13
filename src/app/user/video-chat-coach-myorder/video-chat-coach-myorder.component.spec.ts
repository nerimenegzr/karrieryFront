import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoChatCoachMyorderComponent } from './video-chat-coach-myorder.component';

describe('VideoChatCoachMyorderComponent', () => {
  let component: VideoChatCoachMyorderComponent;
  let fixture: ComponentFixture<VideoChatCoachMyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoChatCoachMyorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoChatCoachMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
