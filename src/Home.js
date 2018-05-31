import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MyContext, { MyProvider } from './Data';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="item">
                    <Table  hover>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ESTIMATE DEVLIVERY</th>
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
                                                    
                                                    <td>{data.name}</td>
                                                    <td>{data.reports[0].estimated_completed_at}</td>
                                                   

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
                <div className="item">
                    <Table hover>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ESTIMATE DEVLIVERY</th>
                        </tr>
                    </thead>
                    <tbody>
                    <MyProvider>
                    <MyContext.Consumer>
                        {(val) => (

                            val.consider.map((data, key) => {
                                return (
                                    <React.Fragment key={key}>
                                       <tr >
                                                    
                                                    <td>{data.name}</td>
                                                    <td>{data.reports[0].estimated_completed_at}</td>
                                                   

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
                <div className="item">
                    <Table hover>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ESTIMATE DEVLIVERY</th>
                        </tr>
                    </thead>
                    <tbody>
                    <MyProvider>
                    <MyContext.Consumer>
                        {(val) => (

                            val.onHold.map((data, key) => {
                                return (
                                    <React.Fragment key={key}>
                                       <tr >
                                                    
                                                    <td>{data.name}</td>
                                                    <td>{data.reports[0].estimated_completed_at}</td>
                                                   

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


                
            </div>
        );
    }
}

export default Home;