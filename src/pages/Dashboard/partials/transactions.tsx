import { isEqual } from "lodash";
import { memo } from "react";
import Spinner from "../../../components/Spinner";
import Transaction from "../../../components/Transaction";
import { TransactionState, DashboardState } from "../state";
import styles from "./transactions.module.scss";

interface TransfersProps {
	transactions: DashboardState["transactions"];
	minimal?: boolean;
}

const Transfers: React.FC<TransfersProps> = ({
	transactions,
	minimal = false,
}) => (
	<div
		className={`${styles.transactions}  ${minimal ? styles.minimal : ""} ${
			transactions.status === "loading" ? styles.loading : ""
		}`}
	>
		{!minimal && <div className={styles.shadow}></div>}
		{minimal && <h1>Transactions</h1>}
		<div className={`${styles.list} ${minimal ? styles.minimal : ""}`}>
			{transactions.status === "completed" ? (
				<>
					{transactions.data.map((item: TransactionState) => (
						<Transaction key={item._id} transaction={item} />
					))}
				</>
			) : (
				<Spinner />
			)}
		</div>
	</div>
);

export default memo(Transfers, isEqual);
