import { isEqual } from "lodash";
import React, { memo } from "react";
import { WalletState } from "../../pages/Dashboard/state";
import Spinner from "../Spinner";
import Token from "../Token";
import styles from "./styles.module.scss";

interface WalletProps {
	wallet: {
		data: WalletState;
		status: "idle" | "completed" | "loading" | "failed";
		error: string;
	};
}

const Wallet: React.FC<WalletProps> = ({ wallet }) => {
	return (
		<div
			className={`${styles.main} ${
				wallet.status === "loading" ? styles.loading : ""
			}`}
		>
			{wallet.status === "completed" ? (
				<>
					<div className={styles.address}>
						<span className={styles.name}>Address</span>
						<p className={styles.value}>{wallet?.data?.address}</p>
					</div>
					<div className={styles.tokens}>
						{Object.entries(wallet?.data?.balance).map(([key, item]) => (
							<Token token={item} key={key} />
						))}
					</div>
				</>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default memo(Wallet, isEqual);
