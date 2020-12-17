import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./NoteComponents/NoteStyles/globalStyles";
import { LightTheme, DarkTheme } from "./NoteComponents/NoteStyles/themes";

import Notebook from "./NoteComponents/main";
import Sidebar from "./NoteComponents/sidebar";
import Page from "./NoteComponents/page";
import Search from "./NoteComponents/PageEvents/searchpage/SearchPage";
import HowTo from "./NoteComponents/HowTo";

function PagesRouter(props) {
  const [theme, setTheme] = useState("light");
  return (
    <React.Fragment>
      <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
        <Sidebar themes={{ theme: [theme, setTheme] }} />
        <Switch>
          <Route
            exact
            path={`${props.match.path}`}
            render={(routeProps) => {
              return <HowTo themes={{ theme: [theme, setTheme] }} />;
            }}
          />
          <Route
            exact
            path={`${props.match.path}/search`}
            render={(routeProps) => {
              return <Search themes={{ theme: [theme, setTheme] }} />;
            }}
          />
          <Route path={`${props.match.path}/:id`} component={Page} />
          <GlobalStyle />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default PagesRouter;
