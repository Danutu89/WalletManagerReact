import { RootState } from "../../app/store";

export interface CounterState {
	value: number;
	status: "idle" | "loading" | "failed";
	error: string;
}

export const initialState: CounterState = {
	value: 0,
	status: "idle",
	error: "",
};

export const selectCount = (state: RootState) => state.home.value;
