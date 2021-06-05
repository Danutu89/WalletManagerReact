import React, { ReactElement } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PublicRoute: React.FC<
	{
		logged: boolean;
		children: ReactElement;
		restricted: boolean;
	} & RouteProps<string>
> = (props) => {
	const { logged, children, restricted } = props;

	if (logged && restricted) return <Redirect to="/dashboard" />;

	return <Route {...props}>{children}</Route>;
};

export default PublicRoute;
