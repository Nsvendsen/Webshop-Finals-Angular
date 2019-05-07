import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/entities/product';
import { ProductsActions } from '../products.actions';

@Component({
  selector: 'app-view-one-product',
  templateUrl: './view-one-product.component.html',
  styleUrls: ['./view-one-product.component.scss']
})
export class ViewOneProductComponent implements OnInit {

  oneProduct: Product;

  constructor( private productApiService: ProductApiService, private router: Router, private productsActions: ProductsActions) { } //Use productActions instead of productApiService

  ngOnInit() {
    var PathSplit = this.router.url.split("/");
    var currentProductId = PathSplit[PathSplit.length-1];
    console.log(currentProductId);
    this.productApiService.getProduct(Number(currentProductId)).subscribe((response: Product) => {
      console.log(response);
      this.oneProduct = response;
    }, error => {
      console.log("error!" + error);
    });
  }

}
