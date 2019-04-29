import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewProfileListComponent } from './admin-view-profile-list.component';

describe('AdminViewProfileListComponent', () => {
  let component: AdminViewProfileListComponent;
  let fixture: ComponentFixture<AdminViewProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
