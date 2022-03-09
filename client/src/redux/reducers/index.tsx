// // i create the interfaces and import where i want 
// import {
//     IStateInitial,
//     IActionPayload
// } from '../../interfaces';

// const initialState:IStateInitial = {
// 	counter: 1,
// };

// export const reducers = (state:IStateInitial = initialState, action:IActionPayload) => {
// 	return state;
// };

import {combineReducers} from 'redux';

// import the reducer to combine
import { usersReducer } from "./users";

// import the interface to asign to the store
import { IStoreState } from "../../interfaces/index";

// asign the interface before the combine
export const reducers = combineReducers<IStoreState>({
	users: usersReducer,
});