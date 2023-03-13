import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickOneOrderWorkOnComponent } from './pick-one-order-work-on.component';

describe('PickOneOrderWorkOnComponent', () => {
  let component: PickOneOrderWorkOnComponent;
  let fixture: ComponentFixture<PickOneOrderWorkOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickOneOrderWorkOnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickOneOrderWorkOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
