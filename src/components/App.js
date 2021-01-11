//dependencies
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//Router Components
import AuthRouter from "../routeComponents/auth/AuthRouter";
import PagesRouter from "../routeComponents/pages/PagesRouter";

//components
import NavUp from "./navbar/NavUp";
import Home from "./Home";
import InternalServerError from "./InternalServerError";
import NoMatch from "./NoMatch";
import About from "./About";

//Contexts
import { AuthContextComponent } from "../contexts/authContext";

//Styles for Styled Components
import { GlobalStyle } from "./styles/globalStyles";
import { LightTheme, DarkTheme } from "./styles/themes";
import { SansSerif, Serif } from "./styles/fonts";

function App() {
  const history = useHistory();
  const [theme, setTheme] = useState("light");

  const [font, setFont] = useState("sans-serif");

  return (
    <div>
      <ThemeProvider
        theme={theme === "light" ? LightTheme : DarkTheme}
        font={font === "sans-serif" ? SansSerif : Serif}
      >
        <GlobalStyle />
        <BrowserRouter>
          <AuthContextComponent>
            <NavUp
              history={history}
              theme={theme}
              setTheme={setTheme}
              font={font}
              setFont={setFont}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={(routeProps) => {
                  return (
                    <Home
                      {...routeProps}
                      history={history}
                      themes={{ theme: [theme, setTheme] }}
                      fonts={{ font: [font, setFont] }}
                    />
                  );
                }}
              />

              {/* Login, Signup, Logout and Profile routes */}
              <Route
                path="/auth"
                render={(routeProps) => {
                  return (
                    <AuthRouter
                      {...routeProps}
                      history={history}
                      themes={{ theme: [theme, setTheme] }}
                      fonts={{ font: [font, setFont] }}
                    />
                  );
                }}
              />

              {/* Pages router */}
              <Route
                path="/pages"
                render={(routeProps) => {
                  return (
                    <PagesRouter
                      {...routeProps}
                      history={history}
                      themes={{ theme: [theme, setTheme] }}
                      fonts={{ font: [font, setFont] }}
                    />
                  );
                }}
              />

              <Route
                path="/about"
                render={(routeProps) => {
                  return (
                    <About
                      {...routeProps}
                      history={history}
                      themes={{ theme: [theme, setTheme] }}
                      fonts={{ font: [font, setFont] }}
                    />
                  );
                }}
              />

              {/* error handling routes  */}
              <Route
                path="/internalservererror"
                component={InternalServerError}
              />
              <Route path="*" component={NoMatch} />
            </Switch>
          </AuthContextComponent>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
