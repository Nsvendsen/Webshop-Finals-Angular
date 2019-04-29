import { Component, OnInit } from '@angular/core';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/entities/item';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-item-list',
  templateUrl: './view-item-list.component.html',
  styleUrls: ['./view-item-list.component.scss']
})
export class ViewItemListComponent implements OnInit {

  items: Item[];

  constructor(private itemDataService: ItemDataService, private router: Router) { }

  ngOnInit() {
    this.itemDataService.getAllItems().subscribe((response: Item[]) => {
      //If success
      console.log(response); //Remove later
      this.items = response;
    }, error => {
      //If fail
      console.log("Error!", error);
    });
  }
  navigate(item: Item) {
    this.router.navigate(['/products/' + item.id])
  }
}
