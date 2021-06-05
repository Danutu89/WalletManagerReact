import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginAsync } from "./thunks";
import { initialState } from "./state";

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(loginAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.data = action.payload;
			})
			.addCase(loginAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error += action.error.message;
			});
	},
});

export default loginSlice.reducer;
