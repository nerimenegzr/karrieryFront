import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithCoachComponent } from './chat-with-coach.component';

describe('ChatWithCoachComponent', () => {
  let component: ChatWithCoachComponent;
  let fixture: ComponentFixture<ChatWithCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatWithCoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWithCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
