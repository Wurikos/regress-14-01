import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "500px",
	"height": "500px",
	"background": "#2db5c4"
};
const overrides = {};

const Boxs = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Boxs, { ...Box,
	defaultProps,
	overrides
});
export default Boxs;