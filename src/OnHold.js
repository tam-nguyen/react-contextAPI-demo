import React, { Component } from "react";
import { Table } from "react-bootstrap";
import MyContext, { MyProvider } from "./Data";
class OnHold extends Component {
  render() {
    //<i className="fa fa-exclamation" aria-hidden="true"></i>
    return (
      <div className="onhold">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>STATUS</th>
              <th>NAME</th>
              <th>UPDATE</th>
              <th>PACKAGE</th>
              <th>GEO</th>
            </tr>
          </thead>
          <tbody>
            <MyProvider>
              <MyContext.Consumer>
                {val =>
                  val.onHold.map((data, key) => {
                    return (
                      <React.Fragment key={key}>
                        <tr>
                          <td>
                            <i
                              className="fa fa-exclamation"
                              aria-hidden="true"
                            />
                            {data.reports[0].status}
                          </td>
                          <td>{data.name}</td>
                          <td>{data.reports[0].updated_at}</td>
                          <td>{data.reports[0].package}</td>
                          <td>{data.reports[0].geo}</td>
                        </tr>
                      </React.Fragment>
                    );
                  })
                }
              </MyContext.Consumer>
            </MyProvider>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default OnHold;
