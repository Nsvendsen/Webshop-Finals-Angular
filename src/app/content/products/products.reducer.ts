import { ProductsActions } from './products.actions';
import { ProductsState } from '../../store';
import { tassign } from 'tassign';
// import { InitialStateService } from 'src/app/services/initial-state.service';

const INITIAL_STATE: ProductsState = {items: [], isProcessing: undefined, isAdmin: undefined}
// const INITIAL_STATE: ProductsState = InitialStateService.getInitialSitterTestState();

// Reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function productsReducer(state: ProductsState = INITIAL_STATE, action:any) {
   
    switch (action.type) {
        //Create item was made into 3 cases to make process spinner work
        case ProductsActions.CREATE_ITEM: //action.payload = Item
            return tassign(state, { isProcessing: true })
        //If it succeeds   
        case ProductsActions.CREATE_ITEM_SUCCESS: //action.payload = Item
            // Copies items array and adds the new Item object to the copy
            return tassign(state, { isProcessing: false , items: [...state.items, action.payload]})
        //If webservice fails
        case ProductsActions.CREATE_ITEM_FAILURE:
            return tassign(state, { isProcessing: false })

        case ProductsActions.UPDATE_ITEM: //Not working. //action.payload = Item (updated Item)
            let index = state.items.findIndex(item => item.id == action.payload.id)

            return tassign(state, {items: [
              ...state.items.slice(0, index),
              action.payload,
              ...state.items.slice(index + 1)
            ]});
            
        case ProductsActions.DELETE_ITEM: //action.payload = string (id of item)
            return tassign(state, { items: state.items.filter(item => item.id !== action.payload) });

        // case ProductsActions.ENABLE_ADMIN_AUTHORITY: //action.payload = boolean
        //     return tassign(state, { isAdmin: action.payload })

        //Get all items was made into 3 cases to make process spinner work
        case ProductsActions.GET_ALL_ITEMS: //action.payload = Sitter[] (all sitters from API)
            return tassign(state, { isProcessing: true })
        case ProductsActions.GET_ALL_ITEMS_SUCCESS:
            return tassign(state, { isProcessing: false, items: [...state.items, ...action.payload]})
        case ProductsActions.GET_ALL_ITEMS_FAILURE:
            return tassign(state, { isProcessing: false })
        default:
            return state;
    }
}
