import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeMybalanceComponent } from './see-mybalance.component';

describe('SeeMybalanceComponent', () => {
  let component: SeeMybalanceComponent;
  let fixture: ComponentFixture<SeeMybalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeMybalanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeMybalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
