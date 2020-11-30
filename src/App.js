import React from "react";
import "./App.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header";

import Footer from "./components/Footer";

// IMPORT CONTAINERS
import Home from "./containers/Home";
import Game from "./containers/Game";

function App() {
  return (
    <Router>
      <Route>
        <Header />
      </Route>
      <Switch>
        <Route path="/games/:id">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
