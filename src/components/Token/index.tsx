import { isEqual } from "lodash";
import React, { memo } from "react";
import { TokenState } from "../../pages/Dashboard/state";
import styles from "./styles.module.scss";

interface TokenProps {
	token: TokenState;
}

const Token: React.FC<TokenProps> = ({ token }) => {
	return (
		<div className={styles.token}>
			<div className={styles.icon}>
				<i className={`${styles.symbol} cf cf-${token.symbol.toLowerCase()}`} />
			</div>
			<span className={styles.balance}>
				{token.symbol} {token.balance}
			</span>
		</div>
	);
};

export default memo(Token, isEqual);
