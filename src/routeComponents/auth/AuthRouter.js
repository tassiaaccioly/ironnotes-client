import React from "react";
import { Route, Switch } from "react-router-dom";

import SignUp from "./SignUp";
import Login from "./Login";
import DeleteUser from "./DeleteUser";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

function AuthRouter(props) {
  const theme = props.themes.theme[0];

  return (
    <React.Fragment>
      <Switch>
        <Route
          path={`${props.match.path}/signup`}
          render={(routeProps) => {
            return <SignUp {...routeProps} theme={theme} />;
          }}
        />
        <Route
          path={`${props.match.path}/login`}
          render={(routeProps) => {
            return <Login {...routeProps} theme={theme} />;
          }}
        />
        <Route exact path={`${props.match.path}/profile`} component={Profile} />
        <Route
          path={`${props.match.path}/profile/edit`}
          component={EditProfile}
        />
        <Route path={`${props.match.path}/delete/:id`} component={DeleteUser} />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
