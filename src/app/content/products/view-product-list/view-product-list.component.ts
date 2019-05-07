import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product } from 'src/app/entities/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product-list',
  templateUrl: './view-product-list.component.html',
  styleUrls: ['./view-product-list.component.scss']
})
export class ViewProductListComponent implements OnInit {

  products: Product[];

  constructor(private productApiService: ProductApiService, private router: Router) { }

  ngOnInit() {
    this.productApiService.getAllProducts().subscribe((response: Product[]) => {
      //If success
      console.log(response); //Remove later
      this.products = response;
    }, error => {
      //If fail
      console.log("Error!", error);
    });
  }
  navigate(product: Product) {
    this.router.navigate(['/products/' + product.id])
  }

}
