import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./home/Home";
import AuthRouter from "../routeComponents/auth/AuthRouter";
import PagesRouter from "../routeComponents/pages/PagesRouter";

import InternalServerError from "./internalservererror/InternalServerError";
import NoMatch from "./nomatch/NoMatch";

import { AuthContextComponent } from "../contexts/authContext";

import About from "./about/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextComponent>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* Login, Signup, Logout and Profile routes */}
            <Route path="/auth" component={AuthRouter} />

            {/* Pages routes */}
            <Route path="/pages" component={PagesRouter} />
            {/* About route */}
            <Route path="/about" component={About} />
            {/* error handling routes  */}

            <Route
              path="/internalservererror"
              component={InternalServerError}
            />
            <Route path="*" component={NoMatch} />
          </Switch>
        </AuthContextComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
