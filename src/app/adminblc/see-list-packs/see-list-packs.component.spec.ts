import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListPacksComponent } from './see-list-packs.component';

describe('SeeListPacksComponent', () => {
  let component: SeeListPacksComponent;
  let fixture: ComponentFixture<SeeListPacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListPacksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
