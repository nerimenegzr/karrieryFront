import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFeedbackAdminComponent } from './send-feedback-admin.component';

describe('SendFeedbackAdminComponent', () => {
  let component: SendFeedbackAdminComponent;
  let fixture: ComponentFixture<SendFeedbackAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendFeedbackAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendFeedbackAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
