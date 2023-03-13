import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelOrderNotpayedComponent } from './cancel-order-notpayed.component';

describe('CancelOrderNotpayedComponent', () => {
  let component: CancelOrderNotpayedComponent;
  let fixture: ComponentFixture<CancelOrderNotpayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelOrderNotpayedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelOrderNotpayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
