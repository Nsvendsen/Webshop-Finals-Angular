import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewProductVariationsComponent } from './admin-view-product-variations.component';

describe('AdminViewProductVariationsComponent', () => {
  let component: AdminViewProductVariationsComponent;
  let fixture: ComponentFixture<AdminViewProductVariationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewProductVariationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewProductVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
