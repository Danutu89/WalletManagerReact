import { isEqual } from "lodash";
import React, { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUser } from "../../app/user/state";
import { selectDashboard } from "./state";
import { getTransactionsAsync, getWalletAsync } from "./thunks";
import styles from "./styles.module.scss";
import { useView } from "../../hooks/view";
import Desktop from "./layouts/desktop";
import Tablet from "./layouts/tablet";
import Mobile from "./layouts/mobile";

const Dashboard = () => {
	const { useEffect } = React;
	const dispatch = useAppDispatch();
	const { wallet, transactions } = useAppSelector(selectDashboard);
	const user = useAppSelector(selectUser);
	const { width } = useView();

	useEffect(() => {
		dispatch(getWalletAsync(user.id));
		dispatch(getTransactionsAsync(user.address));
	}, []);

	return (
		<div className={styles.main}>
			{width > 1500 && <Desktop transactions={transactions} wallet={wallet} />}
			{width > 1100 && width < 1500 && (
				<Tablet transactions={transactions} wallet={wallet} />
			)}
			{width < 1100 && <Mobile transactions={transactions} wallet={wallet} />}
		</div>
	);
};

export default memo(Dashboard, isEqual);
