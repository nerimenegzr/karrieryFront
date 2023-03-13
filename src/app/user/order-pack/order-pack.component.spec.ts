import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPackComponent } from './order-pack.component';

describe('OrderPackComponent', () => {
  let component: OrderPackComponent;
  let fixture: ComponentFixture<OrderPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
