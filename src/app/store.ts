import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { Item } from './entities/item';
import { productsReducer } from './content/products/products.reducer';
import { Product } from './entities/product';

export class ProductsState {
    // items: Item[];
    allProducts: Product[];

    // itemId: string; 
    isAdmin: boolean; //= false;
    // clickedObject: any; //alternative to itemId

    isProcessing: boolean; //Spinner
}

// The applications state is defined here. Every variable that my application needs should be here.
export class IAppState {
    products?: ProductsState;
}
export const rootReducer = combineReducers<IAppState>({
    products: productsReducer
    // router: routerReducer
});
