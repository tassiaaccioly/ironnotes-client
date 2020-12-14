import React from "react";
import { Route, Switch } from "react-router-dom";

import NoteBook from "./NoteComponents/main";

function PagesRouter(props) {
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${props.match.path}/all`} component={NoteBook} />
      </Switch>
    </React.Fragment>
  );
}

export default PagesRouter;
