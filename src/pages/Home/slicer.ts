import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { incrementAsync } from "./thunks";
import { initialState } from "./state";

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => {
				state.status = "loading";
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = "idle";
				state.value += action.payload;
			})
			.addCase(incrementAsync.rejected, (state, action) => {
				state.status = "failed";
				state.error += action.error.message;
			});
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
