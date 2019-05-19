import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOnePaymentInfoComponent } from './step-one-payment-info.component';

describe('StepOnePaymentInfoComponent', () => {
  let component: StepOnePaymentInfoComponent;
  let fixture: ComponentFixture<StepOnePaymentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOnePaymentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOnePaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
