import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap'
import AppActions from '../actions/AppActions'
import AppStore from '../stores/AppStore'

import ContactListItem from './ContactListItem'

function getContactListItem(contact) {
  return <ContactListItem key={contact.id} contact={contact} />
}

export default class Contacts extends Component {
  constructor() {
    super()
    this.state = {
      contacts: []
    }
  }

  componentWillMount = () => AppStore.addChangeListener(this.onChange)
  componentDidMount = () => AppActions.recieveContacts()
  componentWillUnmount = () => AppStore.removeChangeListener(this.onChange)

  onChange = () => this.setState({ contacts: AppStore.getContacts() })

  render() {

    let contactListItems;

    if (this.state.contacts) {
      contactListItems = this.state.contacts.map(contact => getContactListItem(contact))
    }
    return (
      <div>
        <ListGroup>
          {contactListItems}
        </ListGroup>
      </div>
    );
  }
}

