import React, { Component } from "react";

const MyContext = React.createContext();

export class MyProvider extends Component {
  constructor() {
    super();
    this.state = {
      pending: [],
      consider: [],
      onHold: []
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const api = `https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates`;

    fetch(proxyurl + api)
      .then(res => res.json())
      .then(respond => {
        console.log(respond);
        // get data total number
        let pendingDatas = respond.map((data, key) => {
          if (data.reports[0].status === "pending") {
            return data;
          }
        });
        let considerDatas = respond.map((data, key) => {
          if (data.reports[0].status === "consider") {
            return data;
          }
        });
        let onHoldDatas = respond.map((data, key) => {
          if (data.reports[0].status === "suspended") {
            return data;
          }
        });

        let pendingDataClean = [];
        let considerDataClean = [];
        let onHoldDataClean = [];

        for (let i = 0; i < pendingDatas.length; i++) {
          if (pendingDatas[i] !== undefined) {
            pendingDataClean.push(pendingDatas[i]);
          }
          if (considerDatas[i] !== undefined) {
            considerDataClean.push(considerDatas[i]);
          }
          if (onHoldDatas[i] !== undefined) {
            onHoldDataClean.push(onHoldDatas[i]);
          }
        }

        this.setState({
          pending: pendingDataClean,
          consider: considerDataClean,
          onHold: onHoldDataClean
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          pending: this.state.pending,
          consider: this.state.consider,
          onHold: this.state.onHold
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyContext;
