import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'


export default class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            ContactManager

          </Navbar.Brand>
        </Navbar.Header>

      </Navbar>
    );
  }
}

