import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iphone", price: 8900, quantity: 0 },
      { id: 2, productName: "iphone", price: 200, quantity: 0 },
      { id: 3, productName: "keyboard", price: 90, quantity: 0 },
      { id: 4, productName: "Macbook", price: 1200, quantity: 0 },
      { id: 5, productName: "monitor", price: 890, quantity: 0 },
      { id: 6, productName: "standing desk", price: 900, quantity: 0 },
    ],
  };
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                id={prod.id}
                productName={prod.productName}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
