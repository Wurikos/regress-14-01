import React from "react";
import { useOverrides } from "@quarkly/components";
import Boxs from "./Boxs";
const defaultProps = {};
const overrides = {};

const Gdgd = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Boxs {...rest}>
		{children}
	</Boxs>;
};

Object.assign(Gdgd, { ...Boxs,
	defaultProps,
	overrides
});
export default Gdgd;