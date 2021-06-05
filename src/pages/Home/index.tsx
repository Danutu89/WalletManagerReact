import React, { memo } from "react";
import { LandingImage } from "../../components/LandingImage";
import "./styles.scss";
import { isEqual } from "lodash";

const Home = () => {
	return (
		<div className="main">
			<LandingImage />
		</div>
	);
};

export default memo(Home, isEqual);
