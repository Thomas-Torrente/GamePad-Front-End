import React, { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// IMPORT COMPONENTS
import Header from "./components/Header";

import Footer from "./components/Footer";

// IMPORT CONTAINERS
import Home from "./containers/Home";
import Game from "./containers/Game";
import SignUp from "./containers/SignUp";
import Login from "./containers/Login";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  // on créer token qui = aux cookies créer si il existe.
  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookies.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookies.remove("userToken");
      setToken(null);
    }
  };
  return (
    <Router>
      <Route>
        <Header token={token} setUser={setUser} />
      </Route>
      <Switch>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

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
