import { isEqual } from "lodash";
import { memo } from "react";
import Transfer from "../../../components/Transfer";
import Wallet from "../../../components/Wallet";
import Transactions from "../partials/transactions";
import { DashboardState } from "../state";
import styles from "./desktop.module.scss";

interface DesktopProps {
	transactions: DashboardState["transactions"];
	wallet: DashboardState["wallet"];
}

const Desktop: React.FC<DesktopProps> = ({ transactions, wallet }) => (
	<div className={styles.container}>
		<div className={styles.wallet}>
			<Wallet wallet={wallet} />
		</div>
		<Transactions transactions={transactions} />
		<div className={styles.transfer}>
			<Transfer
				tokens={{
					state: wallet.status,
					error: wallet.error,
					data: wallet.data.balance,
				}}
			/>
		</div>
	</div>
);

export default memo(Desktop, isEqual);
