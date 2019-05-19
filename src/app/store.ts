import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { productsReducer } from './content/products/products.reducer';
import { Product } from './entities/product';
import { basketReducer } from './content/basket/basket.reducer';

import { User } from './entities/user';
import { Order } from './entities/order';
import { userReducer } from './content/profile/user.reducer';

export class UserState {
    loggedInUser: User;
    // basket: Order; //Order contains orderlines
    isAdmin: boolean;
}

export class ProductsState {
    allProducts: Product[]; 
    isAdmin: boolean; //= false;
    isProcessing: boolean; //Spinner
}

export class BasketState { //Remove and use basket on userstate instead?
    productsInBasket: Product[];
}

// The applications state is defined here. Every variable that my application needs should be here.
export class IAppState {
    products?: ProductsState;
    basketProducts?: BasketState;
    user?: UserState;
}
export const rootReducer = combineReducers<IAppState>({
    products: productsReducer,
    basketProducts: basketReducer,
    user: userReducer
    // router: routerReducer
});
