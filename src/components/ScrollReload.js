import React, { useEffect, Fragment } from "react";
import { withRouter } from "react-router-dom";

function ScrollReload({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollReload);
