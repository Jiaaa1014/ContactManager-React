import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Header from './components/Header'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}></Col>
            <AddContact />
            <Contacts />
          </Row>
        </Grid>
      </div >
    );
  }
}

export default App;
