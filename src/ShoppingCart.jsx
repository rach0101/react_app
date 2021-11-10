import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productname: "iphone", price: 8900, quantity: 0 },
      { id: 1, productname: "iphone", price: 200, quantity: 0 },
      { id: 1, productname: "keyboard", price: 90, quantity: 0 },
      { id: 1, productname: "Macbook", price: 1200, quantity: 0 },
      { id: 1, productname: "monitor", price: 890, quantity: 0 },
      { id: 1, productname: "standing desk", price: 900, quantity: 0 },
    ],
  };
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map((prod) => {
            return <Product />;
          })}
        </div>
      </div>
    );
  }
}
