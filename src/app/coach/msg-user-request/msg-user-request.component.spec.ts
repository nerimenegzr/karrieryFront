import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgUserRequestComponent } from './msg-user-request.component';

describe('MsgUserRequestComponent', () => {
  let component: MsgUserRequestComponent;
  let fixture: ComponentFixture<MsgUserRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgUserRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgUserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
