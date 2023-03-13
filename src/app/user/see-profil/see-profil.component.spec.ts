import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeProfilComponent } from './see-profil.component';

describe('SeeProfilComponent', () => {
  let component: SeeProfilComponent;
  let fixture: ComponentFixture<SeeProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
