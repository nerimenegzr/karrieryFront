import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCoachMyorderComponent } from './see-coach-myorder.component';

describe('SeeCoachMyorderComponent', () => {
  let component: SeeCoachMyorderComponent;
  let fixture: ComponentFixture<SeeCoachMyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCoachMyorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeCoachMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
