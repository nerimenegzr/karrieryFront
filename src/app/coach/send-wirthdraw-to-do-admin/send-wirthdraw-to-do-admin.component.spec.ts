import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendWirthdrawToDoAdminComponent } from './send-wirthdraw-to-do-admin.component';

describe('SendWirthdrawToDoAdminComponent', () => {
  let component: SendWirthdrawToDoAdminComponent;
  let fixture: ComponentFixture<SendWirthdrawToDoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendWirthdrawToDoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendWirthdrawToDoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
