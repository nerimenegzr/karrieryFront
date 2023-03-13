import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListAgentsComponent } from './see-list-agents.component';

describe('SeeListAgentsComponent', () => {
  let component: SeeListAgentsComponent;
  let fixture: ComponentFixture<SeeListAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListAgentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
