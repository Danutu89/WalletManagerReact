import { RootState } from "../../app/store";

export interface TokenState {
	address: string;
	balance: string;
	symbol: string;
}

export interface WalletState {
	address: string;
	pKey: string;
	balance: {
		[x: string]: TokenState;
	};
}

export interface TransactionState {
	_id: string;
	to: string;
	status: "rejected" | "completed" | "pending";
	from: string;
	amount: string;
	cause?: string;
	mode: "out" | "in";
}

export interface DashboardState {
	wallet: {
		data: WalletState;
		status: "idle" | "completed" | "loading" | "failed";
		error: string;
	};
	transactions: {
		data: TransactionState[];
		status: "idle" | "completed" | "loading" | "failed";
		error: string;
	};
	transaction: {
		status: "idle" | "completed" | "loading" | "failed";
		error: string;
		data: TransactionState;
	};
}

export const initialState: DashboardState = {
	wallet: {
		status: "idle",
		error: "",
		data: {} as WalletState,
	},
	transactions: {
		status: "idle",
		error: "",
		data: [],
	},
	transaction: {
		status: "idle",
		error: "",
		data: {} as TransactionState,
	},
};

export const selectDashboard = (state: RootState) => state.dashboard;
