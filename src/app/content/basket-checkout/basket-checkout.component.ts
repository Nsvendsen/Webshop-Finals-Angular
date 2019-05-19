import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket-checkout',
  templateUrl: './basket-checkout.component.html',
  styleUrls: ['./basket-checkout.component.scss']
})
export class BasketCheckoutComponent implements OnInit {

  checkoutStep: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
