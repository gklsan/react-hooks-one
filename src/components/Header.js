import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import WelcomePage from "./WelcomePage";

const Header = () => {
  return(
    <Router>
      <div>
        <div className="header">
          <h1 className="logo">Gklsan</h1>
          <ul className="nav">
            <li className="navlink">
              <Link to="/">Home</Link>
            </li>
            <li className="navlink">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <div className="hamburger">
            <i className="fas fa-bars"></i>
          </div>
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <WelcomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default Header;
