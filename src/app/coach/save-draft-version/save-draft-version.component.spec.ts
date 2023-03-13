import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDraftVersionComponent } from './save-draft-version.component';

describe('SaveDraftVersionComponent', () => {
  let component: SaveDraftVersionComponent;
  let fixture: ComponentFixture<SaveDraftVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveDraftVersionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveDraftVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
