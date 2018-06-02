import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MyContext, { MyProvider } from './Data';
// import MyProvider from './Data';

class Pending extends Component {


    render() {

        return (
            <div className="pending">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>STATUS</th>
                            <th>NAME</th>
                            <th>ESTIMATED DELIVERY</th>
                            <th>PACKAGE</th>
                            <th>GEO</th>
                        </tr>
                    </thead>
                    <tbody>
                        <MyProvider>
                            <MyContext.Consumer>
                                
                                    {(val) => (
                                       
                                       val.pending.map((data, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                <tr >
                                                    <td><i className="fa fa-sync" aria-hidden="true"></i>{data.reports[0].status}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.reports[0].estimated_completed_at}</td>
                                                    <td>{data.reports[0].package}</td>
                                                    <td>{data.reports[0].geo}</td>

                                                </tr>
                                                </React.Fragment>
                                            )
                                        })

                                    )}
                                
                            </MyContext.Consumer>
                        </MyProvider>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Pending;