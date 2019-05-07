import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product } from 'src/app/entities/product';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class ProductsActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>, private productApiService: ProductApiService) {} 

  // This gives a strongly typed way to call an action.
  static CREATE_PRODUCT: string = 'CREATE_PRODUCT'; //Create
  static CREATE_PRODUCT_SUCCESS: string = 'CREATE_PRODUCT_SUCCESS'; //Create
  static CREATE_PRODUCT_FAILURE: string = 'CREATE_PRODUCT_FAILURE'; //Create
//   static SAVE_ID: string = 'SAVE_ID'; //Save ID of product about to be updated
  static UPDATE_PRODUCT: string = 'UPDATE_PRODUCT'; //Update
  static DELETE_PRODUCT: string = 'DELETE_PRODUCT'; //Delete
//   static ENABLE_ADMIN_AUTHORITY: string = 'ENABLE_ADMIN_AUTHORITY';
  static GET_ALL_PRODUCTS: string = 'GET_ALL_PRODUCTS';
  static GET_ALL_PRODUCTS_SUCCESS: string = 'GET_ALL_PRODUCTS_SUCCESS';
  static GET_ALL_PRODUCTS_FAILURE: string = 'GET_ALL_PRODUCTS_FAILURE';

  createProduct(product: Product): void {
    //Sets isProcessing to true(spinner)
    this.ngRedux.dispatch({
      type: ProductsActions.CREATE_PRODUCT,
      // NO PAYLOAD
    });

    //Action creater calls web service, and dispatches new redux action.
    this.productApiService.addProduct(product).subscribe(response => { //Subscribing is needed to make it work. //save in DB

      //If all goes well.
      this.ngRedux.dispatch({
        type: ProductsActions.CREATE_PRODUCT_SUCCESS,
        payload: response // response is the payload because product now has an id. Else use product.
      });
    }, error => {
      console.log("Error! Product was not created", error);

      //If web service fails.
      this.ngRedux.dispatch({
        type: ProductsActions.CREATE_PRODUCT_FAILURE,
        payload: error //response
      });
    }); 
  }

  updateProduct(product: Product): void { 
    this.productApiService.updateProduct(product).subscribe(response => {
      this.ngRedux.dispatch({
        type: ProductsActions.UPDATE_PRODUCT,
        payload: response //response or product
      });
    }, error => {
      console.log("Error! Product was not updated", error);
    });
  }

  deleteProduct(id: number): void { 
    this.productApiService.deleteProduct(id).subscribe(response => {
      this.ngRedux.dispatch({
        type: ProductsActions.DELETE_PRODUCT,
        payload: id
      });
    }, error => { //Might cause error?
      console.log("Error! Product was not deleted", error);
    }); 
  }

//   enableAdminAuthority(): void {
//     this.ngRedux.dispatch({
//       type: ProductsActions.ENABLE_ADMIN_AUTHORITY,
//       payload: true
//     });
//   }

  getAllProducts(): boolean { //: boolean or void
    console.log("getAllProducts() called"); //Remove later
    //Sets isProcessing to true(spinner)
    this.ngRedux.dispatch({
      type: ProductsActions.GET_ALL_PRODUCTS,
      //NO PAYLOAD
    });

    this.productApiService.getAllProducts().subscribe((responseFromApi: any[]) => { 
    //   const myData = responseFromApi.filter(x => x.isActive === 1); // 1 or true?
      console.log(responseFromApi);

      //If it was a success
      this.ngRedux.dispatch({
        type: ProductsActions.GET_ALL_PRODUCTS_SUCCESS,
        payload: responseFromApi //myData filter the data? 
      });
    }, error => {
      console.log("Error! ", error);
      //If websevice fails
      this.ngRedux.dispatch({
        type: ProductsActions.GET_ALL_PRODUCTS_FAILURE,
        payload: error 
      });
    });
    return false;
  }
}
