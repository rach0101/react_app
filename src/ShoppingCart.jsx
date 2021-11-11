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
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
              >
                <button className="btn btn-primary">Buy me now!</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  handleIncrement = (product) => {
    // console.log("handle increment", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    console.log(allProducts[index]);
    allProducts[index].quantity++;
    this.setState({ products: allProducts });
  };
  handleDecrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    console.log(allProducts[index]);
    allProducts[index].quantity--;
    this.setState({ products: allProducts });
  };
}
