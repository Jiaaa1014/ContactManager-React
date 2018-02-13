import React, { Component } from 'react';
import { Button, ListGroup, ListGroupItem, Well } from 'react-bootstrap'

export default class ContactListItem extends Component {
  render() {
    const { contact } = this.props
    return (
      <Well>
        <h4>{contact.name}</h4>
        <ListGroup>
          <ListGroupItem>Email: {contact.email}</ListGroupItem>
          <ListGroupItem>Phone: {contact.phone}</ListGroupItem>
        </ListGroup>
      </Well>
    );
  }
}

