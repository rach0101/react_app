import React, { Component } from "react";

export default class Product extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div class="card-body">
          <div class="text-muted">#{this.props.id} </div>
          <h5 className="p-5 border-top">{this.props.productName}</h5>
        </div>
      </div>
    );
  }
}
