import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../../store';
import { Product } from 'src/app/entities/product';

@Injectable({ providedIn: 'root'})

// This class is an action creator.
export class BasketActions {

// We depencency inject the redux library.
constructor (private ngRedux: NgRedux<IAppState>) {} 

  // This gives a strongly typed way to call an action.
  static ADD_TO_BASKET: string = 'ADD_TO_BASKET'; 
  static REMOVE_FROM_BASKET: string = 'REMOVE_FROM_BASKET'; 
  static CLEAR_BASKET: string = 'CLEAR_BASKET'; 

  addToBasket(product: Product): void { 
    this.ngRedux.dispatch({
        type: BasketActions.ADD_TO_BASKET,
        payload: product
    });
  }

  removeFromBasket(id: any): void { // perhaps make id another type
    this.ngRedux.dispatch({
        type: BasketActions.REMOVE_FROM_BASKET,
        payload: id
    });
  }

  clearBasket(): void { 
    this.ngRedux.dispatch({
        type: BasketActions.CLEAR_BASKET,
        //NO PAYLOAD
    });
  }
}
