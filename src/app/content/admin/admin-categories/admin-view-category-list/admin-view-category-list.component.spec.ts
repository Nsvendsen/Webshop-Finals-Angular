import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCategoryListComponent } from './admin-view-category-list.component';

describe('AdminViewCategoryListComponent', () => {
  let component: AdminViewCategoryListComponent;
  let fixture: ComponentFixture<AdminViewCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
