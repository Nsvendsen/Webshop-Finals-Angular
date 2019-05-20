import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  // displayedColumns: string[] = ['id', 'name', 'isActive', 'category', 'price', 'actions']; //Sets columns in this order. 
  constructor() { }

  ngOnInit() {
  }

}
