import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditProfileComponent } from './create-or-edit-profile.component';

describe('CreateOrEditProfileComponent', () => {
  let component: CreateOrEditProfileComponent;
  let fixture: ComponentFixture<CreateOrEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
