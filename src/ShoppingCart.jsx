import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  // Executes when the component is mounted
  constructor(props) {
    console.log("constructor - Shopping Cart");

    // calling super class's constructor
    super(props);
    this.state = {
      products: [],
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
    var promise = fetch("http://localhost:5000/products", { method: "GET" });
    promise.then((response) => {
      console.log(response);

      var promise2 = response.json();
      promise2.then((products) => {
        console.log(products);
      });
    });
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
