import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
// import ShoppingCart from "./ShoppingCart";
// import Login from "./Login";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Dashboard />
      </React.Fragment>
    );
  }
}
