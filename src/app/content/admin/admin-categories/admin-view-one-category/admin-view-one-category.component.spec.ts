import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewOneCategoryComponent } from './admin-view-one-category.component';

describe('AdminViewOneCategoryComponent', () => {
  let component: AdminViewOneCategoryComponent;
  let fixture: ComponentFixture<AdminViewOneCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewOneCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewOneCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
