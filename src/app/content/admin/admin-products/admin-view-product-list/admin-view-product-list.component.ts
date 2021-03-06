import { Component, OnInit, ViewChild } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ProductsActions } from 'src/app/content/products/products.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from 'src/app/entities/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-product-list',
  templateUrl: './admin-view-product-list.component.html',
  styleUrls: ['./admin-view-product-list.component.scss']
})
export class AdminViewProductListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'isActive', 'category', 'price', 'actions']; //Sets columns in this order. 
  products: Product[];  
  isProcessing: boolean;

  // https://stackoverflow.com/questions/47581267/how-to-add-data-dynamically-to-mat-table-datasource 
  dataSource = new MatTableDataSource<Product>(); //ITEM_DATA / this.products as param
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ngRedux: NgRedux<IAppState>, private productsActions: ProductsActions, private router: Router) { }

  ngOnInit() {
    //Redux implemented
    this.productsActions.getAllProducts(); //Dispatch action
    this.ngRedux.select(x => x.products).subscribe((data) => {
      console.log(data.allProducts);
      this.dataSource.data = data.allProducts;
      this.products = data.allProducts;
      // console.log(this.products); //Remove later
      this.dataSource.paginator = this.paginator;
      // this.isAdmin = data.isAdmin;
      this.isProcessing = data.isProcessing; 
    });
  }

  editProduct(productId: any){
    this.router.navigate(['/admin/products/edit/' + productId]);
    console.log(productId);
  }

  deleteProduct(productId: any){
    let conf = confirm("Er du sikker på at du vil slette produktet?");
    if(conf){
      console.log("ProductId deleted: " + productId);
      this.productsActions.deleteProduct(productId);
    }
  }

  viewProductVariations(productId: any){
    this.router.navigate(['/admin/products/variations/' + productId]);
  }
}
