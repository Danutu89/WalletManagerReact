import React from "react";
import styles from "./styles.module.scss";

const Button: React.FC<
	{
		children: string;
		icon?: string;
		loading?: boolean;
		fluid?: boolean;
	} & React.DOMAttributes<HTMLButtonElement>
> = ({ icon = "", children, loading = false, fluid, ...props }) => {
	return (
		<button
			{...props}
			className={`${styles.button} ${fluid ? styles.fluid : ""}`}
		>
			{loading === false ? children : "Loading..."}
		</button>
	);
};

export { Button };
