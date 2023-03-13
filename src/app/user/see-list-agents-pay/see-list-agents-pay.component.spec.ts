import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListAgentsPayComponent } from './see-list-agents-pay.component';

describe('SeeListAgentsPayComponent', () => {
  let component: SeeListAgentsPayComponent;
  let fixture: ComponentFixture<SeeListAgentsPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListAgentsPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListAgentsPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
