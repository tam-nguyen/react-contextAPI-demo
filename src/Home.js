import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyContext, { MyProvider } from "./Data";

class Home extends Component {
  render() {
    return (
      <MyProvider>
        <div className="home">
          <div className="item">
            <MyContext.Consumer>
              {val => (
                <div className="item-title">
                  <h1>{val.pending.length}</h1>
                  <i className="fa fa-sync" />
                  Pending
                </div>
              )}
            </MyContext.Consumer>

            <Table hover>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ESTIMATE DEVLIVERY</th>
                </tr>
              </thead>
              <tbody>
                <MyContext.Consumer>
                  {val =>
                    val.pending.map((data, key) => {
                      return (
                        <React.Fragment key={key}>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.reports[0].estimated_completed_at}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })
                  }
                </MyContext.Consumer>
              </tbody>
            </Table>
            <Link to="/pending">Show Pending Reports</Link>
          </div>

          <div className="item">
            <MyContext.Consumer>
              {val => (
                <div className="item-title">
                  <h1>{val.consider.length}</h1>
                  <i className="fas fa-exclamation" />
                  Consider
                </div>
              )}
            </MyContext.Consumer>
            <Table hover>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>UPDATE</th>
                </tr>
              </thead>
              <tbody>
                <MyContext.Consumer>
                  {val =>
                    val.consider.map((data, key) => {
                      return (
                        <React.Fragment key={key}>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.reports[0].updated_at}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })
                  }
                </MyContext.Consumer>
              </tbody>
            </Table>
          </div>
          <div className="item">
            <MyContext.Consumer>
              {val => (
                <div className="item-title">
                  <h1>{val.onHold.length}</h1>
                  <i className="fa fa-exclamation" aria-hidden="true" />
                  On Hold
                </div>
              )}
            </MyContext.Consumer>
            <Table hover>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>UPDATE</th>
                </tr>
              </thead>
              <tbody>
                <MyContext.Consumer>
                  {val =>
                    val.onHold.map((data, key) => {
                      return (
                        <React.Fragment key={key}>
                          <tr>
                            <td>{data.name}</td>
                            <td>{data.reports[0].updated_at}</td>
                          </tr>
                        </React.Fragment>
                      );
                    })
                  }
                </MyContext.Consumer>
              </tbody>
            </Table>
          </div>
        </div>
      </MyProvider>
    );
  }
}

export default Home;
