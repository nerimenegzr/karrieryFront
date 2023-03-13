import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatCoachMyorderComponent } from './chat-coach-myorder.component';

describe('ChatCoachMyorderComponent', () => {
  let component: ChatCoachMyorderComponent;
  let fixture: ComponentFixture<ChatCoachMyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatCoachMyorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatCoachMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
