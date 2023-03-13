import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveArchiveFeedbackComponent } from './save-archive-feedback.component';

describe('SaveArchiveFeedbackComponent', () => {
  let component: SaveArchiveFeedbackComponent;
  let fixture: ComponentFixture<SaveArchiveFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveArchiveFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveArchiveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
