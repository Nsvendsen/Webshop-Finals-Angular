import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ItemDataService } from 'src/app/services/item-data.service';

@Component({
  selector: 'app-admin-view-item-list',
  templateUrl: './admin-view-item-list.component.html',
  styleUrls: ['./admin-view-item-list.component.scss']
})
export class AdminViewItemListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'in_stock', 'is_active', 'category', 'price'];
  dataSource: any[];  

  constructor(private itemDataService: ItemDataService) { }

  ngOnInit() {
    this.itemDataService.getAllItems().subscribe((response: Item[]) => {
      //If success
      console.log(response);
      this.dataSource = response;
    }, error => {
      //If fail
      console.log("Error!", error);
    }); //Perhaps make another endpoint to deliver admin related data?
  }

}
