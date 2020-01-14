import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "../styles/header.scss";
import Navigation from "../components/Navigation";
import img1 from "../images/flaga.jpg";
import img2 from "../images/1polskasvg.svg";

const Header = () => {
  return (
    <div>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <header className="site-header">
              <div className="site-header-container">
                <div className="header-navigation">{<Navigation />}</div>
                <div className="header-logo-container">
                  <div className="header-logo-box main-logo">
                    <img
                      className="header-logo"
                      src={img2}
                      alt="1Polska logo"
                    />
                  </div>
                  <div className="text-under-logo">
                    Oddolna inicjatywa społeczna
                  </div>
                </div>
              </div>
            </header>
          )}
        />
        <Route
          path="/"
          render={() => (
            <header className="site-header site-header-small">
              <div className="site-header-container">
                <div className="header-navigation">{<Navigation />}</div>
                <div className="header-logo-container-small">
                  <div className="header-logo-box">
                    <NavLink to="/">
                      <img
                        className="header-logo-small"
                        src={img2}
                        alt="1Polska logo"
                      />
                    </NavLink>
                  </div>{" "}
                </div>
              </div>
            </header>
          )}
        />
      </Switch>
    </div>
  );
};
export default Header;
