import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logOut } from "../../app/user/slicer";
import { UserState } from "../../app/user/state";
import { Item } from "./Item";
import styles from "./styles.module.scss";

interface NavBarProps {
	user: UserState;
}

const Navbar: React.FC<NavBarProps> = ({ user }) => {
	const dispatch = useAppDispatch();

	const handleLogout = (): void => {
		dispatch(logOut());
	};

	return (
		<div className={styles.navbar}>
			<Item>
				<Link to="/">Wallet</Link>
			</Item>
			<div className={styles.right}>
				{!user.logged ? (
					<Item>
						<Link to="/login">Login</Link>
					</Item>
				) : (
					<>
						<Item>
							<Link to="/dashboard">{user.address}</Link>
						</Item>
						<Item onClick={handleLogout}>Logout</Item>
					</>
				)}
			</div>
		</div>
	);
};

export { Navbar };
