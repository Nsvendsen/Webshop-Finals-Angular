import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewProductListComponent } from './admin-view-product-list.component';

describe('AdminViewProductListComponent', () => {
  let component: AdminViewProductListComponent;
  let fixture: ComponentFixture<AdminViewProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
