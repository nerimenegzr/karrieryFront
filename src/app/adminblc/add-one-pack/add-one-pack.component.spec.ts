import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnePackComponent } from './add-one-pack.component';

describe('AddOnePackComponent', () => {
  let component: AddOnePackComponent;
  let fixture: ComponentFixture<AddOnePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOnePackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOnePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
