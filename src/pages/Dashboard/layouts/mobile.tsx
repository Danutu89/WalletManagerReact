import { isEqual } from "lodash";
import { memo } from "react";
import Transfer from "../../../components/Transfer";
import Wallet from "../../../components/Wallet";
import Transactions from "../partials/transactions";
import { DashboardState } from "../state";
import styles from "./mobile.module.scss";

interface MobileProps {
	transactions: DashboardState["transactions"];
	wallet: DashboardState["wallet"];
}

const Mobile: React.FC<MobileProps> = ({ transactions, wallet }) => (
	<div className={styles.container}>
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
		<Transactions minimal transactions={transactions} />
	</div>
);

export default memo(Mobile, isEqual);
