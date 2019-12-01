import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../styles/app.scss";
import "../styles/variables.scss";
import Header from "./Header";
import Pages from "./Pages";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>{<Header />}</header>
          <main>{<Pages />}</main>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;

//ARTYKULY NORMALNIE GENERUJE SIE NP ZA POMOCA REST API
// for github-pages - command npm run deploy
