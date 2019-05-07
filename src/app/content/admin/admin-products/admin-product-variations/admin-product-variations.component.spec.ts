import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductVariationsComponent } from './admin-product-variations.component';

describe('AdminProductVariationsComponent', () => {
  let component: AdminProductVariationsComponent;
  let fixture: ComponentFixture<AdminProductVariationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductVariationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
