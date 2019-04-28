import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditItemComponent } from './create-or-edit-item.component';

describe('CreateOrEditItemComponent', () => {
  let component: CreateOrEditItemComponent;
  let fixture: ComponentFixture<CreateOrEditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
