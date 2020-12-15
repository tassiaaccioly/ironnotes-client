import React from "react";
import { Route, Switch } from "react-router-dom";

import NoteBook from "./NoteComponents/main";

function PagesRouter(props) {
  return (
    <React.Fragment>
      <Switch>
      
        <Route exact path={`${props.match.path}/all`} component={NoteBook} />
        <Route path={`${props.match.path}/:id`} component={NoteBook} />
      </Switch>
    </React.Fragment>
  );
}

export default PagesRouter;
