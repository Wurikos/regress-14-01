import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    },
    "index": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    },
    "novaya-stranica": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    },
    "novaya-stranica2": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    },
    "page": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    },
    "page1": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    },
    "page2": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    },
    "page21": {
        "background": "#ae6a6a",
        "margin": "8px 20px 8px 20px"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
