import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./NoteStyles/globalStyles";
import { LightTheme, DarkTheme } from "./NoteStyles/themes";

import Sidebar from "./Sidebar";
import Page from "./Page";
import Search from "./PageEvents/searchpage/SearchPage";
import HowTo from "./HowTo";
import EditPage from "./PageEvents/EditPage";
import NewPage from "./PageEvents/NewPage";
import NewQuote from "./quotes/AddNewQuote";
import DeletePage from "./PageEvents/DeletePage";
import TagPage from "./TagPage";
import TagPills from "./TagPills";

function PagesRouter(props) {
  const history = useHistory();
  const [theme, setTheme] = useState("light");
  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <Sidebar history={history} themes={{ theme: [theme, setTheme] }} />
        <Switch>
          <Route
            exact
            path={`${props.match.path}`}
            render={(routeProps) => {
              return (
                <HowTo {...routeProps} themes={{ theme: [theme, setTheme] }} />
              );
            }}
          />
          <Route
            exact
            path={`${props.match.path}/search`}
            render={(routeProps) => {
              return (
                <Search {...routeProps} themes={{ theme: [theme, setTheme] }} />
              );
            }}
          />
          <Route
            exact
            path={`${props.match.path}/newquote`}
            component={NewQuote}
          />
          <Route
            exact
            path={`${props.match.path}/edit/:id`}
            component={EditPage}
          />
          <Route
            exact
            path={`${props.match.path}/newpage`}
            component={NewPage}
          />
          <Route
            exact
            path={`${props.match.path}/delete/:id`}
            component={DeletePage}
          />
          <Route
            exact
            path={`${props.match.path}/tags/:tag`}
            component={TagPage}
          />
          <Route
            exact
            path={`${props.match.path}/tagpills`}
            component={TagPills}
          />
          <Route path={`${props.match.path}/:id`} component={Page} />
          <GlobalStyle />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default PagesRouter;
