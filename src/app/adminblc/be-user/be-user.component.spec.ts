import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeUserComponent } from './be-user.component';

describe('BeUserComponent', () => {
  let component: BeUserComponent;
  let fixture: ComponentFixture<BeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
