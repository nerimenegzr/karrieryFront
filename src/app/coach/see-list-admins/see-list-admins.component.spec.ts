import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListAdminsComponent } from './see-list-admins.component';

describe('SeeListAdminsComponent', () => {
  let component: SeeListAdminsComponent;
  let fixture: ComponentFixture<SeeListAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListAdminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
