import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/entities/order';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dateTimeCreated', 'orderState', 'priceTotal', 'actions']; //Sets columns in this order.
  dataSource = new MatTableDataSource<Order>(); 
   
  constructor() { }

  ngOnInit() {
  }

  viewOrderLines(orderId: any){

  }
}
