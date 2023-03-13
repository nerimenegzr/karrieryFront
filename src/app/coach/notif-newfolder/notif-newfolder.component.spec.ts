import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifNewfolderComponent } from './notif-newfolder.component';

describe('NotifNewfolderComponent', () => {
  let component: NotifNewfolderComponent;
  let fixture: ComponentFixture<NotifNewfolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifNewfolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifNewfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
