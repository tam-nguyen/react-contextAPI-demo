import React, { Component } from 'react';
import './App.css';
import { Table } from 'react-bootstrap';
import Header from './Header';
import Main from './Main';


const MyContext = React.createContext();

class MyProvider extends Component {

  constructor() {
    super();
    this.state = {
      pending: []
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const api = `https://8z74to6yra.execute-api.us-east-1.amazonaws.com/production/candidates`;

    fetch(proxyurl + api)
      .then(res => res.json())
      .then(respond => {

        // get pending total number
        let pendingDatas = respond.map((data, key) => {

          if (data.reports[0].status === "pending") {
            return data;
          }

        })

        let pendingDataClean = [];
        for (let i = 0; i < pendingDatas.length; i++) {
          if (pendingDatas[i] !== undefined) {
            pendingDataClean.push(pendingDatas[i])
          }

        }

        this.setState({
          pending: pendingDataClean

        })

      })
      .catch(err => console.log(err))

  }

  render() {
    return (
      <MyContext.Provider value='im indnf'>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {


  render() {


    //const pending = [...this.state.pending];

    return (
      <MyProvider>
        <div className="App">

          {(context) => (
            <p>hello </p>
          )}

          <div>
            <div className="nav">
            <Header />

            </div>
            
          </div>

          <div className="main">
<Main />
            <div className="item">
              <h1>pending</h1>
              <Table striped condensed hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ESTIMATED DELIVERY</th>

                  </tr>
                  {/* {pending.map((data, key) => {
                  return (

                    <tr key={key}>
                      <td>{data.name}</td>
                      <td>{data.reports[0].estimated_completed_at}</td>
                    </tr>

                  )
                })} */}
                </thead>
                <tbody>

                </tbody>
              </Table>


              {/* <Pending

              /> */}
              {/* <Link to="/pending">Show Pending Reports</Link> */}
            </div>

            <div className="item">
              <h2>Consider</h2>
              {/* <Link to="/consider">Show Consider Reports</Link> */}
            </div>
            <div className="item">
              <h2>On Hold</h2>
              {/* <Link to="/onhold">Show Suspended Reports</Link> */}
            </div>
          </div>





        </div>
      </MyProvider>
    );
  }
}

export default App;



{/* <MyContext.Consumer>
                {(context) => (

                    <React.Fragment>
                        <div className="pending">
<h1>Pending compoent</h1>

                            <div>
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
                                        


                                    </tbody>
                                </Table>



                            </div>
                        </div>
                    </React.Fragment>
                )}

            </MyContext.Consumer> */}