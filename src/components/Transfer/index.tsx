import { isEqual } from "lodash";
import React, { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectDashboard, TokenState } from "../../pages/Dashboard/state";
import { putTransactionsAsync } from "../../pages/Dashboard/thunks";
import { Button } from "../Button";
import { Input } from "../Input";
import TokenSelect from "../TokenSelect";
import styles from "./styles.module.scss";

interface TransferProps {
	tokens: {
		data: { [x: string]: TokenState };
		state: "loading" | "idle" | "completed" | "failed";
		error: string;
	};
}

const Transfer: React.FC<TransferProps> = ({ tokens }) => {
	const { useState } = React;

	const { transaction } = useAppSelector(selectDashboard);
	const dispatch = useAppDispatch();

	const [data, setData] = useState({
		to: "",
		amount: "",
		token: "",
		passphrase: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleTokenSelect = (item: TokenState) => {
		setData((prevState) => ({
			...prevState,
			token: item.symbol,
		}));
	};

	const handleSubmitClick = () => {
		dispatch(putTransactionsAsync(data));
	};

	return (
		<div className={styles.transfer}>
			<h2>Transfer</h2>

			<div className={styles.data}>
				<Input
					name="to"
					onChange={handleInputChange}
					value={data.to}
					placeholder="Address"
				/>
				<Input
					name="amount"
					onChange={handleInputChange}
					value={data.amount}
					placeholder="Amount"
				/>

				{tokens.state === "completed" && (
					<TokenSelect
						state={tokens.state}
						options={Object.values(tokens.data).map((item) => item)}
						error={tokens.error}
						onSelect={handleTokenSelect}
					/>
				)}
				<Input
					name="passphrase"
					onChange={handleInputChange}
					value={data.passphrase}
					type="password"
					placeholder="Passphrase"
				/>
			</div>
			<div className={styles.actions}>
				<Button
					loading={transaction.status === "loading"}
					onClick={handleSubmitClick}
				>
					Send
				</Button>
			</div>
			{transaction.error !== "" && transaction.status === "failed" && (
				<span className={styles.error}>{transaction.error}</span>
			)}
		</div>
	);
};

export default memo(Transfer, isEqual);
