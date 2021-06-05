import React, { memo } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAsync } from "./thunks";
import { selectLogin } from "./state";
import { isEqual } from "lodash";

const Login = () => {
	const { useState } = React;
	const dispatch = useAppDispatch();
	const login = useAppSelector(selectLogin);

	const [user, setUser] = useState("");

	const handleLogin = (): void => {
		dispatch(loginAsync(user));
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setUser((prevState) => value);
	};

	return (
		<div className="main">
			<div className="frame">
				<h1>Login</h1>
				<Input
					value={user}
					name="id"
					placeholder="User ID"
					onChange={handleInputChange}
				/>
				<Button
					loading={login.status === "loading"}
					fluid
					onClick={handleLogin}
				>
					Login
				</Button>
			</div>
		</div>
	);
};

export default memo(Login, isEqual);
