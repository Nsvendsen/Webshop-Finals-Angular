import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { productsReducer } from './content/products/products.reducer';
import { Product } from './entities/product';
import { basketReducer } from './content/basket/basket.reducer';

export class ProductsState {
    allProducts: Product[]; 
    isAdmin: boolean; //= false;
    isProcessing: boolean; //Spinner
}

export class BasketState {
    productsInBasket: Product[];
}

// The applications state is defined here. Every variable that my application needs should be here.
export class IAppState {
    products?: ProductsState;
    basketProducts?: BasketState;
}
export const rootReducer = combineReducers<IAppState>({
    products: productsReducer,
    basketProducts: basketReducer
    // router: routerReducer
});
