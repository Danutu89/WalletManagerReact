import { isEqual } from "lodash";
import React, { memo } from "react";
import styles from "./styles.module.scss";

const Spinner: React.FC = () => {
	return <div className={styles.circle} />;
};

export default memo(Spinner, isEqual);
