import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrEditItemComponent } from './view-or-edit-item.component';

describe('ViewOrEditItemComponent', () => {
  let component: ViewOrEditItemComponent;
  let fixture: ComponentFixture<ViewOrEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
