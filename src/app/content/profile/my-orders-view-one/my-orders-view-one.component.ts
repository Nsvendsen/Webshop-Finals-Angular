import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/entities/order';
import { OrderLine } from 'src/app/entities/orderline';

@Component({
  selector: 'app-my-orders-view-one',
  templateUrl: './my-orders-view-one.component.html',
  styleUrls: ['./my-orders-view-one.component.scss']
})
export class MyOrdersViewOneComponent implements OnInit {

  displayedColumns: string[] = ['sku', 'name', 'orderState', 'dateTimeCreated', 'price']; //Sets columns in this order. Do we show id to the user?
  dataSource = new MatTableDataSource<OrderLine>();
  
  constructor() { }

  ngOnInit() {
  }

}
