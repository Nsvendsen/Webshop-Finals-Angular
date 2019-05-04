import { Component, OnInit, ViewChild } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ItemDataService } from 'src/app/services/item-data.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ProductsActions } from 'src/app/content/products/products.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-view-item-list',
  templateUrl: './admin-view-item-list.component.html',
  styleUrls: ['./admin-view-item-list.component.scss']
})
export class AdminViewItemListComponent implements OnInit {

  // displayedColumns: string[] = ['id', 'name', 'in_stock', 'is_active', 'category', 'price']; //Make backend use models with camel case to fix names?
  // items: any[]; 

  displayedColumns: string[] = ['id', 'name', 'inStock', 'isActive', 'category', 'price']; //Sets columns in this order.
  items: Item[];  
  isProcessing: boolean;

  // https://stackoverflow.com/questions/47581267/how-to-add-data-dynamically-to-mat-table-datasource  02-05-2019 add items instead of hardcoded ITEM_DATA
  dataSource = new MatTableDataSource<Item>(); //ITEM_DATA / this.items as param
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ngRedux: NgRedux<IAppState>, private productsActions: ProductsActions) { }

  ngOnInit() {
    // this.itemDataService.getAllItems().subscribe((response: Item[]) => {
    //   //If success
    //   console.log(response);
    //   this.dataSource = response;
    // }, error => {
    //   //If fail
    //   console.log("Error!", error);
    // }); //Perhaps make another endpoint to deliver admin related data?

    //Redux implemented
    this.productsActions.getAllItems(); //Dispatch action
    this.ngRedux.select(x => x.products).subscribe((data) => {
      this.dataSource.data = data.items;
      // this.dataSource.data = { ...this.dataSource.data, this.items };
      console.log(this.items);
      this.dataSource.paginator = this.paginator;
      // this.isAdmin = data.isAdmin;
      this.isProcessing = data.isProcessing; 
    });
  }

}

const ITEM_DATA: Item[] = [
  {id: 1, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 2, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 3, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 4, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 5, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 6, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 7, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 8, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 9, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 10, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 11, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 12, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 13, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 14, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 15, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 16, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 17, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 18, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 19, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"},
  {id: 20, name: 'test123', inStock: 100, isActive: true, category: 'sko', price: 100, description: "okay"}
];