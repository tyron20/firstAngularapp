import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedetailComponent } from './quotedetail.component';

describe('QuotedetailComponent', () => {
  let component: QuotedetailComponent;
  let fixture: ComponentFixture<QuotedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
