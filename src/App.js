import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
