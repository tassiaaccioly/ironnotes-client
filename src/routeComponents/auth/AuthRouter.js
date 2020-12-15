import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/navbar/NavBar";
import SignUp from "./signup/SignUp";
import Login from "./login/Login";
import DeleteUser from "./delete/DeleteUser";

function AuthRouter(props) {
  console.log(props);
  return (
    <React.Fragment>
      <NavBar history={props.history} />
      <Switch>
        <Route path={`${props.match.path}/signup`} component={SignUp} />
        <Route path={`${props.match.path}/login`} component={Login} />
        <Route path={`${props.match.path}/delete/:id`} component={DeleteUser} />
      </Switch>
    </React.Fragment>
  );
}

export default AuthRouter;
