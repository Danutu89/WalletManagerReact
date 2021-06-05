import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const userSlicer = createSlice({
	name: "user",
	initialState,
	reducers: {
		logOut: (state) => {
			state.address = "";
			state.id = 0;
			state.logged = false;
		},
		logIn: (state, action: PayloadAction<{ id: number; address: string }>) => {
			state.address = action.payload.address;
			state.id = action.payload.id;
			state.logged = true;
		},
	},
});

export const { logOut, logIn } = userSlicer.actions;

export default userSlicer.reducer;
