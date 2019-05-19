import { tassign } from 'tassign';
import { BasketActions } from './basket.actions';
import { BasketState } from 'src/app/store';

const INITIAL_STATE: BasketState = {productsInBasket: []}

// Reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function basketReducer(state: BasketState = INITIAL_STATE, action:any) {
   
    switch (action.type) {
        case BasketActions.ADD_TO_BASKET: //action.payload = Product
            // Copies products array and adds the new Product object to the copy
            return tassign(state, { productsInBasket: [...state.productsInBasket, action.payload]})
            
        case BasketActions.REMOVE_FROM_BASKET: //action.payload = string (id of Product)
            // return tassign(state, { productsInBasket: state.productsInBasket.filter(product => product.id !== action.payload) });
            // return tassign(state, { productsInBasket: state.productsInBasket.filter(product => product.productVariations[0].id !== action.payload) }); //Payload is productvariationid

        default:
            return state;
    }
}
