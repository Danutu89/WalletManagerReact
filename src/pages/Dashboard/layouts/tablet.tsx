import { isEqual } from "lodash";
import { memo } from "react";
import Transfer from "../../../components/Transfer";
import Wallet from "../../../components/Wallet";
import { DashboardState } from "../state";
import styles from "./tablet.module.scss";
import Transactions from "../partials/transactions";

interface TabletProps {
	transactions: DashboardState["transactions"];
	wallet: DashboardState["wallet"];
}

const Tablet: React.FC<TabletProps> = ({ transactions, wallet }) => (
	<div className={styles.container}>
		<div>
			<div className={styles.wallet}>
				<Wallet wallet={wallet} />
			</div>
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
		<Transactions transactions={transactions} />
	</div>
);

export default memo(Tablet, isEqual);
