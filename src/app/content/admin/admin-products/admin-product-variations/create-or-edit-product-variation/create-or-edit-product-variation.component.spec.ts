import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditProductVariationComponent } from './create-or-edit-product-variation.component';

describe('CreateOrEditProductVariationComponent', () => {
  let component: CreateOrEditProductVariationComponent;
  let fixture: ComponentFixture<CreateOrEditProductVariationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditProductVariationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditProductVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
