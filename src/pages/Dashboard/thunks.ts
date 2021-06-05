import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWalletAsync = createAsyncThunk(
	"dashboard/wallet/get",
	async (id: number) => {
		const response = await axios.get(`http://localhost:5000/wallet/${id}`);

		return response.data;
	}
);

export const getTransactionsAsync = createAsyncThunk(
	"dashboard/transactions/get",
	async (address: string) => {
		const response = await axios.get(
			`http://localhost:5000/transactions/${address}`
		);

		return response.data;
	}
);

export const putTransactionsAsync = createAsyncThunk(
	"dashboard/transactions/put",
	async (data: {
		amount: string;
		to: string;
		token?: string;
		passphrase: string;
	}) => {
		const response = await axios.put(
			`http://localhost:5000/transaction/`,
			data
		);

		return response.data;
	}
);
