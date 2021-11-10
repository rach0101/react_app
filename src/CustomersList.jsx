import React, { Component } from "react";
export default class CustomersList extends Component {
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
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Allen",
        phone: "123-453",
        address: { city: "San Francisco" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Rachel",
        phone: "123-454",
        address: { city: "San Diego" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Sarah",
        phone: "123-455",
        address: { city: "Denver" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  //   customerNameStyle = (custName) => {
  //     if (custName.startsWith("S")) return "green-highlight border-left";
  //     else if (custName.startsWith("J")) return "red-highlight border-right";
  //     else return "";
  //   };
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
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
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
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id} </td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Photo
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  //   executes when the user clicks on "change picture" button in the grid
  // receives the 'customer' object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    // get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    // update 'customers' array in the state
    this.setState({ customers: custArr });
  };
}
