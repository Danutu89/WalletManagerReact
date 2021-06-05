import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";
import {
	getTransactionsAsync,
	getWalletAsync,
	putTransactionsAsync,
} from "./thunks";

export const dashboardSlice = createSlice({
	name: "dashboard",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getWalletAsync.pending, (state) => {
				state.wallet.status = "loading";
			})
			.addCase(getWalletAsync.fulfilled, (state, action) => {
				state.wallet.status = "completed";
				state.wallet.data = action.payload;
			})
			.addCase(getWalletAsync.rejected, (state, action) => {
				state.wallet.status = "failed";
				state.wallet.error = `${action.error.message}`;
			})
			.addCase(getTransactionsAsync.pending, (state) => {
				state.transactions.status = "loading";
			})
			.addCase(getTransactionsAsync.fulfilled, (state, action) => {
				state.transactions.status = "completed";
				state.transactions.data = action.payload;
			})
			.addCase(getTransactionsAsync.rejected, (state, action) => {
				state.transactions.status = "failed";
				state.transactions.error = `${action.error.message}`;
			})
			.addCase(putTransactionsAsync.pending, (state) => {
				state.transaction.status = "loading";
			})
			.addCase(putTransactionsAsync.fulfilled, (state, action) => {
				state.transaction.status = "completed";
				state.transaction.data = action.payload;
			})
			.addCase(putTransactionsAsync.rejected, (state, action) => {
				state.transaction.status = "failed";
				state.transaction.error = `${action.error.message}`;
			});
	},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default dashboardSlice.reducer;
