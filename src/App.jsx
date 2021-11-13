import React, { Component, Fragment } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
// import { Route} from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Routes>
            <Route path="/" exact component={Login} />
            <Route path="/dashbord" exact component={Dashboard} />
            <Route path="/customers" exact component={CustomersList} />
            <Route path="/cart" exact component={ShoppingCart} />
            <Route path="/*" component={NoMatchPage} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
