import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListRequestsComponent } from './see-list-requests.component';

describe('SeeListRequestsComponent', () => {
  let component: SeeListRequestsComponent;
  let fixture: ComponentFixture<SeeListRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
