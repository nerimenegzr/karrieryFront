import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoEverythingComponent } from './do-everything.component';

describe('DoEverythingComponent', () => {
  let component: DoEverythingComponent;
  let fixture: ComponentFixture<DoEverythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoEverythingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoEverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
