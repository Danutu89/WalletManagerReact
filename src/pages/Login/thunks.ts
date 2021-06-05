import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logIn } from "../../app/user/slicer";

export const loginAsync = createAsyncThunk(
	"login/fetch",
	async (id: string, api) => {
		const response = await axios.get(
			`http://localhost:5000/wallet/${parseInt(id)}`
		);
		api.dispatch(
			logIn({ address: response.data.address, id: response.data.id })
		);
		return response.data;
	}
);
