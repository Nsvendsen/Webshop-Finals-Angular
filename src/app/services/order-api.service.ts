import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Order } from '../entities/order';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {

  constructor(private http: HttpClient) { }

  //API related methods. Subscribe to get the result.
  placeOrder(order: Order){ 
    return this.http.post(environment.apiUrl + "/order.php", order);
  }

  // getAllOrders() {
  //   return this.http.get(environment.apiUrl + "/order.php");
  // }

  // getAllOrdersByUserId(userId: any) { //Use queryparam?
  //   return this.http.get(environment.apiUrl + "/order.php");
  // }

}
