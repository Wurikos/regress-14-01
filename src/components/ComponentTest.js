import React from "react";
import { useOverrides, GoogleMap, Formspree, Menu, Section, SocialMedia, StackItem, Stack } from "@quarkly/components";
import { Box, Button, Icon, Hr, Image, Input, Link, Text, List } from "@quarkly/widgets";
import EmbedHTML from "./EmbedHTML";
import EmbedJS from "./EmbedJS";
import { MdFace } from "react-icons/md";
const defaultProps = {};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Button"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace
		}
	},
	"hr": {
		"kind": "Hr",
		"props": {}
	},
	"image": {
		"kind": "Image",
		"props": {
			"width": "64px",
			"height": "64px"
		}
	},
	"input": {
		"kind": "Input",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#",
			"children": "Some text"
		}
	},
	"list": {
		"kind": "List",
		"props": {}
	},
	"text": {
		"kind": "Text",
		"props": {
			"children": "First item"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"children": "Some text"
		}
	},
	"googleMap": {
		"kind": "GoogleMap",
		"props": {}
	},
	"formspree": {
		"kind": "Formspree",
		"props": {
			"errorMessage": "Something went wrong",
			"completeText": "Success"
		}
	},
	"input1": {
		"kind": "Input",
		"props": {
			"name": "email",
			"placeholder": "Email",
			"margin-right": "4px"
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"children": "Submit"
		}
	},
	"menu": {
		"kind": "Menu",
		"props": {}
	},
	"embedHtml": {
		"kind": "EmbedHTML",
		"props": {}
	},
	"section": {
		"kind": "Section",
		"props": {}
	},
	"embedJs": {
		"kind": "EmbedJS",
		"props": {}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"youtube": "https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw",
			"vkontakte": "https://vk.com/quarklyapp",
			"telegram": "https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}First Item{"\n        "}
			</>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "flex"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"children": <>
				{"            "}Second Item{"\n        "}
			</>
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"children": "Stack item"
		}
	}
};

const ComponentTest = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Box {...override("box")} />
		<Button {...override("button")} />
		<Icon {...override("icon")} />
		<Hr {...override("hr")} />
		<Image {...override("image")} />
		<Input {...override("input")} />
		<Link {...override("link")} />
		<List {...override("list")}>
			<Text {...override("text")} />
		</List>
		<Text {...override("text1")} />
		<GoogleMap {...override("googleMap")} />
		<Formspree {...override("formspree")}>
			<Input {...override("input1")} />
			<Button {...override("button1")} />
		</Formspree>
		<Menu {...override("menu")} />
		<EmbedHTML {...override("embedHtml")} />
		<Section {...override("section")} />
		<EmbedJS {...override("embedJs")} />
		<SocialMedia {...override("socialMedia")} />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				{"        "}
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Text {...override("text3")} />
				{"    "}
			</StackItem>
		</Stack>
		<StackItem {...override("stackItem2")}>
			<Text {...override("text4")} />
		</StackItem>
		{children}
	</Box>;
};

Object.assign(ComponentTest, { ...Box,
	defaultProps,
	overrides
});
export default ComponentTest;