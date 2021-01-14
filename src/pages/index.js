import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				title
			</title>
			<meta name={"description"} content={"title tut"} />
			<meta property={"og:title"} content={"title tit"} />
			<meta property={"og:description"} content={"title tut"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1610575490161-bfcfccf42ea1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://images.unsplash.com/photo-1610575528294-97e56df074f9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://images.unsplash.com/photo-1610575490161-bfcfccf42ea1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://images.unsplash.com/photo-1610575490161-bfcfccf42ea1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://images.unsplash.com/photo-1610575490161-bfcfccf42ea1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"apple-touch-startup-image"} href={"https://images.unsplash.com/photo-1610575490161-bfcfccf42ea1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<meta name={"msapplication-TileImage"} content={"https://images.unsplash.com/photo-1610574063776-05ed43b71798?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<meta name={"msapplication-TileColor"} content={"#9a0d0d"} />
		</Helmet>
		<Menu />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});