import React, { MouseEventHandler } from "react";
import "./styles.scss";

const Item = ({
	children,
	onClick,
}: {
	children: JSX.Element | string;
	onClick?: MouseEventHandler<HTMLElement>;
}) => {
	return (
		<div onClick={onClick} className="item">
			{children}
		</div>
	);
};

export { Item };
