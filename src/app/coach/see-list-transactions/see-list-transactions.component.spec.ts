import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeListTransactionsComponent } from './see-list-transactions.component';

describe('SeeListTransactionsComponent', () => {
  let component: SeeListTransactionsComponent;
  let fixture: ComponentFixture<SeeListTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeListTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeListTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
