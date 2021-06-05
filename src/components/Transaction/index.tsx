import { isEqual } from "lodash";
import React, { memo } from "react";
import { TransactionState } from "../../pages/Dashboard/state";
import styles from "./styles.module.scss";

interface TransactionProps {
	transaction: TransactionState;
}

const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
	return (
		<div className={styles.transaction}>
			<div className={`${styles.icon} ${styles[transaction.mode]}`}>
				{transaction.mode}
			</div>
			<div className={styles.data}>
				<span className={styles.address}>{transaction.from}</span>

				<span className={styles.amount}>
					<span className={styles.name}>Amount</span>{" "}
					<span className={styles.value}>{`${
						transaction?.amount || "Unknown"
					}`}</span>
				</span>
			</div>
			<div
				className={`${styles.status} ${
					styles[transaction?.status || ""] || ""
				}`}
			>
				{`${
					transaction?.status?.charAt(0).toUpperCase() +
						transaction?.status?.slice(1) || "Unknown"
				}`}
			</div>
		</div>
	);
};

export default memo(Transaction, isEqual);
