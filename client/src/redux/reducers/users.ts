import {
    IUser
} from '../../interfaces';

// import the interface defined in the action for the dispatch object 
import { IGetUsers } from '../actions';

// replace the const for the actionTypes for this
import { ActionTypes } from "../actions/types";

export const usersReducer = (
    // the state will be like the interface
	state: IUser[] = [],
    // the action will be like the interface for the dispatch object
	action: IGetUsers
) => {
    switch(action.type) {
        // i asign the actionType with it
        case ActionTypes.getUsers:
            return action.payload;

            default:
                return state;
    }
};