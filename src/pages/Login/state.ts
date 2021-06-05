import { RootState } from "../../app/store";

export interface UserData {
	username: string;
	first_name: string;
	last_name: string;
}

export interface UserPayload {
	token: string;
	data: UserData;
}
export interface UserLogin {
	username: string;
	password: string;
}

export interface LoginState {
	data: UserData | {};
	status: "idle" | "loading" | "failed";
	error: string;
}

export const initialState: LoginState = {
	data: {},
	status: "idle",
	error: "",
};

export const selectLogin = (state: RootState) => state.login;
