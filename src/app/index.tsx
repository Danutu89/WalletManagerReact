import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { selectUser } from "./user/state";
import "./styles.scss";
import { useAppSelector } from "./hooks";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";

function App() {
	const user = useAppSelector(selectUser);
	return (
		<Router>
			<Navbar user={user} />
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				<PrivateRoute path="/dashboard" exact logged={user.logged}>
					<Dashboard />
				</PrivateRoute>

				<PublicRoute path="/login" exact restricted logged={user.logged}>
					<Login />
				</PublicRoute>
			</Switch>
		</Router>
	);
}

export default App;
