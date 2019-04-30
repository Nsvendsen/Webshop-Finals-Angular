import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/entities/item';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-one-item',
  templateUrl: './view-one-item.component.html',
  styleUrls: ['./view-one-item.component.scss']
})
export class ViewOneItemComponent implements OnInit {

  oneItem: Item;

  constructor( private itemDataService: ItemDataService, private router: Router) { }

  ngOnInit() {
    var PathSplit = this.router.url.split("/");
    var currentItemId = PathSplit[PathSplit.length-1];
    console.log(currentItemId);
    this.itemDataService.getItem(Number(currentItemId)).subscribe((response: Item) => {
      console.log(response);
      this.oneItem = response;
    }, error => {
      console.log("error!" + error);
    });
  }

  
}
