import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  // Executes when the component is mounted
  constructor(props) {
    console.log("constructor - Shopping Cart");

    // calling super class's constructor
    super(props);
    this.state = {
      products: [
        { id: 1, productName: "iphone", price: 8900, quantity: 0 },
        // { id: 2, productName: "iphone", price: 200, quantity: 0 },
        // { id: 3, productName: "keyboard", price: 90, quantity: 0 },
        // { id: 4, productName: "Macbook", price: 1200, quantity: 0 },
        // { id: 5, productName: "monitor", price: 890, quantity: 0 },
        // { id: 6, productName: "standing desk", price: 900, quantity: 0 },
      ],
    };
  }

  render() {
    console.log("render- Shopping Cart");
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
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy me now!</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  // render ends here

  componentDidMount() {
    console.log("componentDidMount Shopping Cart");
    // fetch data from data source
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate",
      prevProps,
      prevState,
      this.props,
      this.state
    );

    // // if(precProps.x != this.props.x){
    //   // make http call
    // }
  }
  componentWillUnmount() {
    console.log("component will unount");
  }

  componentDidCatch(error, info) {
    console.log("component caught error", info);

    localStorage.lassError = `${error}\n ${JSON.stringify(info)}`;
  }

  //   executes when the user clicks the + button
  handleIncrement = (product, maxValue) => {
    // get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  //   executes when the user clicks on - button
  handleDecrement = (product, minValue) => {
    //   get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
  handleDelete = (product) => {
    // get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      // delet product based on index
      allProducts.splice(index, 1);
      // update the state of current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}
