import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFeedbackOrderComponent } from './confirm-feedback-order.component';

describe('ConfirmFeedbackOrderComponent', () => {
  let component: ConfirmFeedbackOrderComponent;
  let fixture: ComponentFixture<ConfirmFeedbackOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmFeedbackOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmFeedbackOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
