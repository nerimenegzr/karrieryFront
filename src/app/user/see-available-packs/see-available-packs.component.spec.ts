import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAvailablePacksComponent } from './see-available-packs.component';

describe('SeeAvailablePacksComponent', () => {
  let component: SeeAvailablePacksComponent;
  let fixture: ComponentFixture<SeeAvailablePacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAvailablePacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAvailablePacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
