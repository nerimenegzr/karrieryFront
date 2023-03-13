import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePayedRequestComponent } from './see-payed-request.component';

describe('SeePayedRequestComponent', () => {
  let component: SeePayedRequestComponent;
  let fixture: ComponentFixture<SeePayedRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePayedRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePayedRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
