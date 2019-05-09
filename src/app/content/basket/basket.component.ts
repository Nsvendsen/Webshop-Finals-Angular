import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { Product } from 'src/app/entities/product';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  productsInBasket: Product[];

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.select(x => x.basketProducts).subscribe((data) => {
      this.productsInBasket = data.productsInBasket;
      console.log(this.productsInBasket);
    });
  }

}
