export interface IStateInitial {
    counter: number;
};

export interface IActionPayload {
    type: string;
};

export interface IUser {
    id: number;
    name: string;
    lastname: string;
};

export interface IStoreState {
    users: IUser[];
};