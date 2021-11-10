import React, { Component } from "react";
export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Scott", phone: "123-456" },
      { id: 2, name: "Jones", phone: "123-452" },
      { id: 3, name: "Allen", phone: "123-453" },
      { id: 4, name: "Rachel", phone: "123-454" },
      { id: 5, name: "Sarah", phone: "123-455" },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr>
                  <td> </td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  //execute when the user clicks on the Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
