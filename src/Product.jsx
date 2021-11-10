import React, { Component } from "react";

export default class Product extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div class="card-body">
          <div class="text-muted">#{this.props.id} </div>
        </div>
      </div>
    );
  }
}
