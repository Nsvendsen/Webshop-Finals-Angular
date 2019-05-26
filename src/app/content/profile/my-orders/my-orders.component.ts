import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/entities/order';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { OrderApiService } from 'src/app/services/order-api.service';
import { UserActions } from '../user.actions';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dateTimeCreated', 'orderState', 'priceTotal', 'actions']; //Sets columns in this order.
  dataSource = new MatTableDataSource<Order>(); 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  orders: Order[];

  //Get the data to display.
  constructor(private ngRedux: NgRedux<IAppState>, private router: Router, private orderApiService: OrderApiService, private userActions: UserActions) { }

  ngOnInit() {

    //Get all orders from redux state. REMEMBER TO ADD NEW VARIABLE IN STORE.
    this.userActions.getMyOrders();
    this.ngRedux.select(x => x.user).subscribe((data) => {

      this.dataSource.data = data.orders;
      this.orders = data.orders;
      // console.log(this.products); //Remove later
      this.dataSource.paginator = this.paginator;
    });
  }

  viewOrderLines(orderId: any){
    this.router.navigate(['/profile/myorders/'+orderId]);
  }
}
