import { UserState } from '../../store';
import { tassign } from 'tassign';
import { User } from 'src/app/entities/user';
import { UserActions } from './user.actions';
// import { InitialStateService } from 'src/app/services/initial-state.service';

const INITIAL_STATE: UserState = {loggedInUser: undefined, isAdmin: undefined, orders: []}
// const INITIAL_STATE: ProductsState = InitialStateService.getInitialSitterTestState();

// Reducer functions are responsible for changing state, by copying and 
// changing the copy, since state is immutable.
export function userReducer(state: UserState = INITIAL_STATE, action:any) {
   
    switch (action.type) {
        case UserActions.LOGIN: //action.payload = User
            return tassign(state, { loggedInUser: action.payload });

        case UserActions.CREATE_ORDER: //action.payload = Order
            return tassign(state, { orders: [...state.orders, action.payload]});
        default:
            return state;
    }
}
