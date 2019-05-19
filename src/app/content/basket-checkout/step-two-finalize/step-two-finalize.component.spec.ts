import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoFinalizeComponent } from './step-two-finalize.component';

describe('StepTwoFinalizeComponent', () => {
  let component: StepTwoFinalizeComponent;
  let fixture: ComponentFixture<StepTwoFinalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTwoFinalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoFinalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
