import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecUserProfilComponent } from './chec-user-profil.component';

describe('ChecUserProfilComponent', () => {
  let component: ChecUserProfilComponent;
  let fixture: ComponentFixture<ChecUserProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecUserProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecUserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
