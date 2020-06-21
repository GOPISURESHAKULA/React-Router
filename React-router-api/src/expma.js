import React, { Component } from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
import escapeRegExp from "escape-string-regexp";
import sortBy from "sort-by";
import "./App.css";

const PropsPage = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h3>Props Page</h3>
    </div>
  );
};

class App extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };
  render() {
    return (
      <div>
        <section className="App">
          <Router>
            <Link to="/404-not-found">404</Link>
            <Link to="/props-through-render">Passing Props</Link>
            <Switch>
              <Route
                exact
                path="/props-through-render"
                render={props => (
                  <PropsPage {...props} title={`Props through render`} />
                )}
              />
              <Route component={NoMatchPage} />
            </Switch>
          </Router>
          <a href="/about">about with browser reload</a>
        </section>
      </div>
    );
  }
}

export default App;
