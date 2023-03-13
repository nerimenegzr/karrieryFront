import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCoachProfilComponent } from './check-coach-profil.component';

describe('CheckCoachProfilComponent', () => {
  let component: CheckCoachProfilComponent;
  let fixture: ComponentFixture<CheckCoachProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCoachProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckCoachProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
