import { ProductsActions } from './products.actions';
import { ProductsState } from '../../store';
import { tassign } from 'tassign';
// import { InitialStateService } from 'src/app/services/initial-state.service';

const INITIAL_STATE: ProductsState = {allProducts: [], isProcessing: undefined, isAdmin: undefined}
// const INITIAL_STATE: ProductsState = InitialStateService.getInitialSitterTestState();

// Reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function productsReducer(state: ProductsState = INITIAL_STATE, action:any) {
   
    switch (action.type) {
        //Create product was made into 3 cases to make process spinner work
        case ProductsActions.CREATE_PRODUCT: //action.payload = Item
            return tassign(state, { isProcessing: true })
        //If it succeeds   
        case ProductsActions.CREATE_PRODUCT_SUCCESS: //action.payload = Item
            // Copies products array and adds the new Item object to the copy
            return tassign(state, { isProcessing: false , allProducts: [...state.allProducts, action.payload]})
        //If webservice fails
        case ProductsActions.CREATE_PRODUCT_FAILURE:
            return tassign(state, { isProcessing: false })

        case ProductsActions.UPDATE_PRODUCT: //Not working. //action.payload = Item (updated Item)
            let index = state.allProducts.findIndex(product => product.id == action.payload.id)

            return tassign(state, {allProducts: [
              ...state.allProducts.slice(0, index),
              action.payload,
              ...state.allProducts.slice(index + 1)
            ]});
            
        case ProductsActions.DELETE_PRODUCT: //action.payload = string (id of product)
            return tassign(state, { allProducts: state.allProducts.filter(product => product.id !== action.payload) });

        // case ProductsActions.ENABLE_ADMIN_AUTHORITY: //action.payload = boolean
        //     return tassign(state, { isAdmin: action.payload })

        //Get all products was made into 3 cases to make process spinner work
        case ProductsActions.GET_ALL_PRODUCTS: //action.payload = Sitter[] (all sitters from API)
            return tassign(state, { isProcessing: true })
        case ProductsActions.GET_ALL_PRODUCTS_SUCCESS:
            // return tassign(state, { isProcessing: false, allProducts: [...state.allProducts, ...action.payload]})
            return tassign(state, { isProcessing: false, allProducts: [...action.payload]})
        case ProductsActions.GET_ALL_PRODUCTS_FAILURE:
            return tassign(state, { isProcessing: false })
        default:
            return state;
    }
}
