import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeHowMuchProfilReadyComponent } from './see-how-much-profil-ready.component';

describe('SeeHowMuchProfilReadyComponent', () => {
  let component: SeeHowMuchProfilReadyComponent;
  let fixture: ComponentFixture<SeeHowMuchProfilReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeHowMuchProfilReadyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeHowMuchProfilReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
