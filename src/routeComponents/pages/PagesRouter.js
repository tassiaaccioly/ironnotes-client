import React from "react";
import { Route, Switch } from "react-router-dom";

function PagesRouter(props) {
  return (
    <React.Fragment>
      <Switch>
        {/* <Route path={`${props.match.path}/pages`} component={SignUp} />
        <Route path={`${props.match.path}/login`} component={Login} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default PagesRouter;
