import axios from "axios";
// this is with a import const from actions type but meh

// import the structure of dispatch
import { Dispatch } from "redux";

// import the interface for asign him to the response
import { IUser } from "../../interfaces";

// replace the old component with the const
import { ActionTypes } from './types';

// i create the interface for the structure of the object i send to dispatch with my action
export interface IGetUsers {
    type: ActionTypes.getUsers,
    payload: IUser[];
};

export const getUsers = () => {
    const url = "https://localhost:3001/user";
    // asign the structure to the dispatch
    return async(dispatch:Dispatch) => {
        // asign the interface for the metod (GET received array of Users with IUser structure)
        const response = await axios.get<IUser[]>(url);
        dispatch<IGetUsers>({
            type: ActionTypes.getUsers,
            payload: response.data
        });
    };
};
