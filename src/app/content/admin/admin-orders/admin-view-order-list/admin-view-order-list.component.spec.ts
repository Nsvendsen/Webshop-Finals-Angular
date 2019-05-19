import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewOrderListComponent } from './admin-view-order-list.component';

describe('AdminViewOrderListComponent', () => {
  let component: AdminViewOrderListComponent;
  let fixture: ComponentFixture<AdminViewOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
