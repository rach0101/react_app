import React, { Component } from "react";
export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: null,
        address: { city: "Berlin" },
        photo: "https://picsum.photos/id/1010/60",
      },

      {
        id: 2,
        name: "Jones",
        phone: null,
        address: { city: "London" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 3,
        name: "Allen",
        phone: "123-453",
        address: { city: "San Francisco" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 4,
        name: "Rachel",
        phone: "123-454",
        address: { city: "San Diego" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 5,
        name: "Sarah",
        phone: "123-455",
        address: { city: "Denver" },
        photo: "https://picsum.photos/id/1010/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className=" m-1 p-1">
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
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //execute when the user clicks on the Refresh button
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2">No Phone </div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id} </td>
          <td>
            <img src={cust.photo} alt="Customer" />
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
}
