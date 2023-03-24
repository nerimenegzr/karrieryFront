import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAdminProfilComponent } from './check-admin-profil.component';

describe('CheckAdminProfilComponent', () => {
  let component: CheckAdminProfilComponent;
  let fixture: ComponentFixture<CheckAdminProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAdminProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAdminProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
