import { isEqual } from "lodash";
import React, { memo } from "react";
import { TokenState } from "../../pages/Dashboard/state";
import styles from "./styles.module.scss";

interface TokenSelectProps {
	options: TokenState[];
	value?: TokenState;
	state: "loading" | "idle" | "completed" | "failed";
	error: string;
	onSelect?: (item: TokenState) => void;
}

const TokenSelect: React.FC<TokenSelectProps> = ({
	options,
	value,
	state,
	error,
	onSelect,
}) => {
	const { useState } = React;

	const [opened, setOpened] = useState(false);
	const [selected, setSelected] = useState<null | TokenState>(null);

	const handleSelectClick = () => {
		setOpened((prevState) => !prevState);
	};

	const handleItemClick = (item: TokenState) => {
		setSelected(item);
		setOpened((prevState) => false);
		if (typeof onSelect !== "undefined") onSelect(item);
	};

	return (
		<div className={styles.select}>
			<div className={styles.value} onClick={handleSelectClick}>
				{selected != null ? (
					<>
						<i
							className={`${styles.symbol} cf cf-${
								selected?.symbol?.toLowerCase() || ""
							}`}
						/>
						<span className={styles.text}>{selected.symbol}</span>
					</>
				) : (
					<>Select token</>
				)}
			</div>
			{opened && (
				<div className={styles.options}>
					{state === "completed" &&
						options.length > 0 &&
						options.map((item) => (
							<div
								key={item.symbol}
								className={styles.option}
								onClick={() => handleItemClick(item)}
							>
								<i
									className={`${styles.symbol} cf cf-${
										item?.symbol?.toLowerCase() || ""
									}`}
								/>
								<span className={styles.text}>{item.symbol}</span>
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default memo(TokenSelect, isEqual);
