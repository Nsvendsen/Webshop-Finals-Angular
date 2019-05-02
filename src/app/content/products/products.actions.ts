import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ItemDataService } from 'src/app/services/item-data.service';
import { Item } from 'src/app/entities/item';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class ProductsActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>, private itemDataService: ItemDataService) {} 

  // This gives a strongly typed way to call an action.
  static CREATE_ITEM: string = 'CREATE_ITEM'; //Create
  static CREATE_ITEM_SUCCESS: string = 'CREATE_ITEM_SUCCESS'; //Create
  static CREATE_ITEM_FAILURE: string = 'CREATE_ITEM_FAILURE'; //Create
//   static SAVE_ID: string = 'SAVE_ID'; //Save ID of item about to be updated
  static UPDATE_ITEM: string = 'UPDATE_ITEM'; //Update
  static DELETE_ITEM: string = 'DELETE_ITEM'; //Delete
//   static ENABLE_ADMIN_AUTHORITY: string = 'ENABLE_ADMIN_AUTHORITY';
  static GET_ALL_ITEMS: string = 'GET_ALL_ITEMS';
  static GET_ALL_ITEMS_SUCCESS: string = 'GET_ALL_ITEMS_SUCCESS';
  static GET_ALL_ITEMS_FAILURE: string = 'GET_ALL_ITEMS_FAILURE';

  createItem(item: Item): void {
    //Sets isProcessing to true(spinner)
    this.ngRedux.dispatch({
      type: ProductsActions.CREATE_ITEM,
      // NO PAYLOAD
    });

    //Action creater calls web service, and dispatches new redux action.
    this.itemDataService.addItem(item).subscribe(response => { //Subscribing is needed to make it work. //save in DB

      //If all goes well.
      this.ngRedux.dispatch({
        type: ProductsActions.CREATE_ITEM_SUCCESS,
        payload: response // response is the payload because item now has an id. Else use item.
      });
    }, error => {
      console.log("Error! Item was not created", error);

      //If web service fails.
      this.ngRedux.dispatch({
        type: ProductsActions.CREATE_ITEM_FAILURE,
        payload: error //response
      });
    }); 
  }

  updateItem(item: Item): void { 
    this.itemDataService.updateItem(item).subscribe(response => {
      this.ngRedux.dispatch({
        type: ProductsActions.UPDATE_ITEM,
        payload: response //response or item
      });
    }, error => {
      console.log("Error! Item was not updated", error);
    });
  }

  deleteItem(id: number): void { 
    this.itemDataService.deleteItem(id).subscribe(response => {
      this.ngRedux.dispatch({
        type: ProductsActions.DELETE_ITEM,
        payload: id
      });
    }, error => { //Might cause error?
      console.log("Error! Item was not deleted", error);
    }); 
  }

//   enableAdminAuthority(): void {
//     this.ngRedux.dispatch({
//       type: ProductsActions.ENABLE_ADMIN_AUTHORITY,
//       payload: true
//     });
//   }

  getAllItems(): boolean { //: boolean or void

    //Sets isProcessing to true(spinner)
    this.ngRedux.dispatch({
      type: ProductsActions.GET_ALL_ITEMS,
      //NO PAYLOAD
    });

    this.itemDataService.getAllItems().subscribe((responseFromApi: any[]) => { 
    //   const myData = responseFromApi.filter(x => x.isActive === 1); // 1 or true?
    //   console.log(myData);

      //If it was a success
      this.ngRedux.dispatch({
        type: ProductsActions.GET_ALL_ITEMS_SUCCESS,
        payload: responseFromApi //myData filter the data? 
      });
    }, error => {
      console.log("Error! ", error);
      //If websevice fails
      this.ngRedux.dispatch({
        type: ProductsActions.GET_ALL_ITEMS_FAILURE,
        payload: error 
      });
    });
    return false;
  }
}
