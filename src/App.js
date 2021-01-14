import React from "react";
import Index from "pages/index";
import NovayaStranica from "pages/novayaStranica";
import NovayaStranica2 from "pages/novayaStranica2";
import Page from "pages/page";
import Page1 from "pages/page1";
import Page2 from "pages/page2";
import Page21 from "pages/page21";
import Page404 from "pages/page404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

export default () => (
    <Router>
        <GlobalStyles />
        <Switch>
        			<Route exact path='/' component={Index}/>
			<Route exact path='/index' component={Index}/>
			<Route exact path='/novaya-stranica' component={NovayaStranica}/>
			<Route exact path='/novaya-stranica2' component={NovayaStranica2}/>
			<Route exact path='/page' component={Page}/>
			<Route exact path='/page1' component={Page1}/>
			<Route exact path='/page2' component={Page2}/>
			<Route exact path='/page21' component={Page21}/>
			<Route component={Page404}/>
        </Switch>
    </Router>
);
