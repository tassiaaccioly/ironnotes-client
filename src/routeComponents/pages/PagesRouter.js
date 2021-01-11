import React from "react";
import { Route, Switch } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Page from "./Page";
import Search from "./searchpage/SearchPage";
import HowTo from "./sidebar/HowTo";
import EditPage from "./pageevents/EditPage";
import NewPage from "./pageevents/NewPage";
import NewQuote from "./quotes/AddNewQuote";
import DeletePage from "./pageevents/DeletePage";
import TagPage from "./TagPage";

function PagesRouter(props) {
  const { history } = props;

  const theme = props.themes.theme[0];
  const setTheme = props.themes.theme[1];
  const font = props.fonts.font[0];
  const setFont = props.fonts.font[1];

  return (
    <React.Fragment>
      <Sidebar
        history={history}
        theme={theme}
        setTheme={setTheme}
        font={font}
        setFont={setFont}
      />
      <Switch>
        <Route
          exact
          path={`${props.match.path}`}
          render={(routeProps) => {
            return <HowTo {...routeProps} />;
          }}
        />
        <Route
          exact
          path={`${props.match.path}/search`}
          render={(routeProps) => {
            return <Search {...routeProps} />;
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
        <Route exact path={`${props.match.path}/newpage`} component={NewPage} />
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
        <Route path={`${props.match.path}/:id`} component={Page} />
      </Switch>
    </React.Fragment>
  );
}

export default PagesRouter;
