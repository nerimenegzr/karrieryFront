import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOnePackComponent } from './update-one-pack.component';

describe('UpdateOnePackComponent', () => {
  let component: UpdateOnePackComponent;
  let fixture: ComponentFixture<UpdateOnePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOnePackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOnePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
