import {
	configureStore,
	ThunkAction,
	Action,
	combineReducers,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import homeReducer from "../pages/Home/slicer";
import loginReducer from "../pages/Login/slicer";
import userReducer from "./user/slicer";
import dashboardReducer from "../pages/Dashboard/slicer";

const reducers = combineReducers({
	home: homeReducer,
	login: loginReducer,
	user: userReducer,
	dashboard: dashboardReducer,
});

const persistConfig = {
	key: "wallet",
	storage,
	whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
