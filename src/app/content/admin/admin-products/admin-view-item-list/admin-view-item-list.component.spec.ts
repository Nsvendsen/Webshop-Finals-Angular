import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewItemListComponent } from './admin-view-item-list.component';

describe('AdminViewItemListComponent', () => {
  let component: AdminViewItemListComponent;
  let fixture: ComponentFixture<AdminViewItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
