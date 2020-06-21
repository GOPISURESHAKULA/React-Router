import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import RegExp from "./RegExp";
import "./App.css";

const PropsPage = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h3>Props Page</h3>
    </div>
  );
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/404-not-found">404</Link>
        <Link to="/props-through-render">Passing Props</Link>
        <Link to="/RegExp">RegExp</Link>
        <Switch>
          <Route
            exact
            path="/props-through-render"
            render={props => (
              <PropsPage {...props} title={`Props through render`} />
            )}
          />
          <Route component={RegExp} />
        </Switch>
      </Router>
      <a href="/about">about with browser reload</a>
    </section>
  );
};

export default App;
