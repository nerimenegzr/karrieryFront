import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListUsersComponent } from './see-list-users.component';

describe('SeeListUsersComponent', () => {
  let component: SeeListUsersComponent;
  let fixture: ComponentFixture<SeeListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
