import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { incrementByAmount } from "./slicer";
import { selectCount } from "./state";

export const incrementAsync = createAsyncThunk(
	"counter/fetchCount",
	async (amount: number) => {
		return 5;
	}
);

export const incrementIfOdd =
	(amount: number): AppThunk =>
	(dispatch, getState) => {
		const currentValue = selectCount(getState());
		if (currentValue % 2 === 1) {
			dispatch(incrementByAmount(amount));
		}
	};
