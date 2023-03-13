import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckFeedbackMycoachComponent } from './check-feedback-mycoach.component';

describe('CheckFeedbackMycoachComponent', () => {
  let component: CheckFeedbackMycoachComponent;
  let fixture: ComponentFixture<CheckFeedbackMycoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckFeedbackMycoachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckFeedbackMycoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
