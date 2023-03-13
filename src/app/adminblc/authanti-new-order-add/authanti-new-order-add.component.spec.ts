import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthantiNewOrderAddComponent } from './authanti-new-order-add.component';

describe('AuthantiNewOrderAddComponent', () => {
  let component: AuthantiNewOrderAddComponent;
  let fixture: ComponentFixture<AuthantiNewOrderAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthantiNewOrderAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthantiNewOrderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
