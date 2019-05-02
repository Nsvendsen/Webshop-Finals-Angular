import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ItemDataService } from 'src/app/services/item-data.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { ProductsActions } from 'src/app/content/products/products.actions';

@Component({
  selector: 'app-admin-view-item-list',
  templateUrl: './admin-view-item-list.component.html',
  styleUrls: ['./admin-view-item-list.component.scss']
})
export class AdminViewItemListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'in_stock', 'is_active', 'category', 'price']; //Make backend use models with camel case to fix names?
  dataSource: any[];  
  isProcessing: boolean;

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
      this.dataSource = data.items;
      console.log(data.items.length);
      // this.isAdmin = data.isAdmin;
      this.isProcessing = data.isProcessing; 
    });
  }

}
