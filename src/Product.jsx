import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    console.log(this.props);
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">#{this.state.product.id} </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price} </div>
          </div>
          {/* card body ends here */}
          <div className="card-footer">
            <div className="float-left">
              <span className="badge">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button className="btn btn-outline-success">+</button>
                <button className="btn btn-outline-success">-</button>
              </div>
            </div>
            {/* float-left ends here */}
            <div className="float-right">{this.props.children}</div>
          </div>
          {/* card-footer ends here */}
        </div>
      </div>
    );
  }
}
