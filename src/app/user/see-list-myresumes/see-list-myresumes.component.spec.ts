import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListMyresumesComponent } from './see-list-myresumes.component';

describe('SeeListMyresumesComponent', () => {
  let component: SeeListMyresumesComponent;
  let fixture: ComponentFixture<SeeListMyresumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListMyresumesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListMyresumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
