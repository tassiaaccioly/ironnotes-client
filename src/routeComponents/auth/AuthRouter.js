import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import DeleteUser from "./delete/DeleteUser";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import About from "../../components/About";

function AuthRouter(props) {
  const { history } = props;
  const theme = props.themes.theme[0];

  return (
    <React.Fragment>
      <Switch>
        <Route
          path={`${props.match.path}/signup`}
          render={(routeProps) => {
            return <SignUp {...routeProps} history={history} theme={theme} />;
          }}
        />
        <Route
          path={`${props.match.path}/login`}
          render={(routeProps) => {
            return <Login {...routeProps} history={history} theme={theme} />;
          }}
        />
        <Route
          exact
          path={`${props.match.path}/profile`}
          render={(routeProps) => {
            return <Profile {...routeProps} history={history} theme={theme} />;
          }}
        />
        <Route
          path={`${props.match.path}/about`}
          render={(routeProps) => {
            return <About {...routeProps} history={history} theme={theme} />;
          }}
        />
        <Route
          path={`${props.match.path}/profile/edit`}
          render={(routeProps) => {
            return (
              <EditProfile {...routeProps} history={history} theme={theme} />
            );
          }}
        />
        <Route
          path={`${props.match.path}/delete/:id`}
          render={(routeProps) => {
            return <DeleteUser {...routeProps} history={history} />;
          }}
        />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
