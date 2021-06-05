import React from "react";
import styles from "./styles.module.scss";

const Input: React.FC<
	{ icon?: string } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ icon = "", ...props }) => {
	return (
		<div className={styles.input}>
			<input {...props} />
		</div>
	);
};

export { Input };
