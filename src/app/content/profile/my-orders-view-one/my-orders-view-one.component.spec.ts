import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersViewOneComponent } from './my-orders-view-one.component';

describe('MyOrdersViewOneComponent', () => {
  let component: MyOrdersViewOneComponent;
  let fixture: ComponentFixture<MyOrdersViewOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersViewOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersViewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
