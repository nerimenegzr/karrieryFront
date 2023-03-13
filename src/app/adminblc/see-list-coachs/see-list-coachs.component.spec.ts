import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListCoachsComponent } from './see-list-coachs.component';

describe('SeeListCoachsComponent', () => {
  let component: SeeListCoachsComponent;
  let fixture: ComponentFixture<SeeListCoachsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListCoachsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListCoachsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
