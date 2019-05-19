import { Component, OnInit, ViewChild } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ProductsActions } from 'src/app/content/products/products.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Product, ProductVariation } from 'src/app/entities/product';
import { Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-admin-view-product-variations',
  templateUrl: './admin-view-product-variations.component.html',
  styleUrls: ['./admin-view-product-variations.component.scss']
})
export class AdminViewProductVariationsComponent implements OnInit {

  // VIEW VARIATIONS FOR ONE PRODUCT
  displayedColumns: string[] = ['id', 'sku', 'inStock', 'size', 'actions']; //Sets columns in this order.
  product: Product;  
  isProcessing: boolean;

  // https://stackoverflow.com/questions/47581267/how-to-add-data-dynamically-to-mat-table-datasource  02-05-2019 add products instead of hardcoded ITEM_DATA
  dataSource = new MatTableDataSource<ProductVariation>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ngRedux: NgRedux<IAppState>, private router: Router, private productApiService: ProductApiService, 
    private productsActions: ProductsActions) { }

  ngOnInit() {
    var PathSplit = this.router.url.split("/");
    var currentProductId = PathSplit[PathSplit.length-1];
    this.productApiService.getProduct(Number(currentProductId)).subscribe((response: Product) => { //USE REDUX INSTEAD
      this.product = response;
      this.dataSource.data = response.productVariations;
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteProductVariation(productVariationId: any){
    // this.productsActions
  }
}

