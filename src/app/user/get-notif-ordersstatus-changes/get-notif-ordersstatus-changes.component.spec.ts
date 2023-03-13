import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNotifOrdersstatusChangesComponent } from './get-notif-ordersstatus-changes.component';

describe('GetNotifOrdersstatusChangesComponent', () => {
  let component: GetNotifOrdersstatusChangesComponent;
  let fixture: ComponentFixture<GetNotifOrdersstatusChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetNotifOrdersstatusChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetNotifOrdersstatusChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
