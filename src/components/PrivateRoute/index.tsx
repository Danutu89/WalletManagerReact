import React, { ReactElement } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: React.FC<
	{ logged: boolean; children: ReactElement } & RouteProps<string>
> = (props) => {
	const { logged, children } = props;

	if (!logged) return <Redirect to="/" />;

	return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
