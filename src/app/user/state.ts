import { RootState } from "../../app/store";

export interface UserState {
	address: string;
	id: number;
	logged: boolean;
}

export const initialState: UserState = {
	address: "",
	id: 0,
	logged: false,
};

export const selectUser = (state: RootState) => state.user;
